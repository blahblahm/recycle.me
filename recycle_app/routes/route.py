from fastapi import APIRouter
from models.recycle import Users, News, Role_UpdateRequest, RecycleRequest, Cupons, BuyCuponRequest
from config.database import collection_users, collection_news, collection_cupons
from schema.schemas import list_serial, list_news, individual_serial, news, serialize_cupon, serialize_cupons
from bson import ObjectId
from fastapi import UploadFile, File, status
import aiofiles
import uuid
from bson.objectid import ObjectId


router = APIRouter()

imgPath = str

# GET Request Method
@router.get("/")
async def get_users():
    users = list_serial(collection_users.find())
    return users

#News get method
@router.get("/news")
async def get_news():
    news = list_news(collection_news.find())
    # print(news)
    return news

#GET Request All Cupons
@router.get("/cupons")
async def get_cupons():
    cupons = serialize_cupons(collection_cupons.find())
    return cupons

@router.get("/{email}")
async def get_user(email):
    myfilter = {"email" : email}
    user = collection_users.find_one(myfilter)
    # fields = {"points": 1, "email": 1}
    # user1 = collection_users.find_one(myfilter, fields)
    # print(user1)
    return individual_serial(user)


#POST Request Method
@router.post("/")
async def post_user(user:Users):
    user.role = 'User'
    user.points = 0
    # user.password = hash(user.password)
    user_dict = dict(user)
    user_dict["cupons"] = []
    collection_users.insert_one(user_dict)

@router.post("/update_role/{email}")
async def update_user(email, roleUpdateRequest: Role_UpdateRequest):
    myfilter = {"email" : email}
    setValue = {"$set" : {"role" : roleUpdateRequest.role}}
    collection_users.update_one(myfilter, setValue)
    user = collection_users.find_one(myfilter)
    
    return individual_serial(user)

#News post method
@router.post("/news")
async def post_news(new_news:News):
    new_news.image = "../../assets/img/fruska_gora.jpg"
    collection_news.insert_one(dict(new_news))
    return {"status" : 200}

#Image post method
@router.post("/news/img/{heading}")
async def post_endpoint( heading, in_file: UploadFile = File(...)):

    file_name = uuid.uuid4()
    async with aiofiles.open(f"static/{file_name}.jpg", "wb") as out_file:
        while content := await in_file.read(1024):  # async read chunk
            await out_file.write(content)
    imgPath = f"static/{file_name}.jpg"

    myFilter = {"heading" : heading}
    setValue = {"$set" : {"image" : imgPath}}
    collection_news.update_one(myFilter, setValue)
    new_news = collection_news.find_one(myFilter)
            
    return news(new_news)


#POST Request Cupons
@router.post("/cupons")
async def new_cupon(new_cupon:Cupons):
    collection_cupons.insert_one(dict(new_cupon))

    return {"status":200}

#POST Request Image change
@router.post("/cupons/img/{cupon_id}")
async def post_endpoint(cupon_id, in_file: UploadFile = File(...)):

    file_name = uuid.uuid4()
    async with aiofiles.open(f"static/{file_name}.jpg", "wb") as out_file:
        while content := await in_file.read(1024):  # async read chunk
            await out_file.write(content)
    imgPath = f"static/{file_name}.jpg"

    myFilter = {"_id" : ObjectId(cupon_id)}
    setValue = {"$set" : {"image" : imgPath}}
    collection_cupons.update_one(myFilter, setValue)
    new_cupon = collection_cupons.find_one(myFilter)
            
    return serialize_cupon(new_cupon)

#POST Request buying cupons
@router.post("/cupons/buy")
async def buy_cupons(buy_cupon_request : BuyCuponRequest):
    email = buy_cupon_request.email
    cupon_id = buy_cupon_request.cupon_id
    userFilter = {"email" : email}
    user = collection_users.find_one(userFilter)
    cuponFilter = {"_id" : ObjectId(cupon_id)}
    cupon = collection_cupons.find_one(cuponFilter)
    if user["points"] < cupon["price"]:
        return {"Error" : 404}
    
    cupons = user["cupons"]
    cupons.append(cupon)

    setValue = {"$set" : {"points" : user["points"] - cupon["price"], "cupons": cupons}}
    collection_users.update_one(userFilter, setValue)
    return {"Status": 200}

#POST Request New number of points
@router.post("/{email}")
async def update_points(email, recycleRequest : RecycleRequest):
    material_type_points = {
        "plastic" : 3,
        "paper" : 3.5,
        "glass" : 100
    }
    points = recycleRequest.weight // material_type_points[recycleRequest.material_type]

    myfilter = {"email" : email}
    user = collection_users.find_one(myfilter)
    setValue = {"$set" : {"points" : user["points"] + points}}
    collection_users.update_one(myfilter, setValue)
    return {"status":200}
