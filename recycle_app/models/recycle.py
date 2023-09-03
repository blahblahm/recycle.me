from pydantic import BaseModel
from typing import Optional

class Users(BaseModel):
    first_name : str
    last_name : str
    username : str
    email : str
    password : str
    points : int
    role : str

class News(BaseModel):
    heading : str
    description : str
    image : str

class Role_UpdateRequest(BaseModel):
    role : str

class RecycleRequest(BaseModel):
    weight : int
    material_type : str

class Cupons(BaseModel):
    id: str
    title: str
    discount : str
    description : str
    price : int
    image : str

class BuyCuponRequest(BaseModel):
    email : str
    cupon_id : str
    
