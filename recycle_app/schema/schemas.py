def individual_serial(user) -> dict:
    if user is None:
        return None 
    return {
        "id": str(user["_id"]),
        "first_name": user["first_name"],
        "last_name": user["last_name"],
        "username": user["username"],
        "email": user["email"],
        "password": user["password"],
        "points": user["points"],
        "role" : user["role"],
        "cupons" : serialize_cupons(user["cupons"])
    }

def list_serial(users) -> list:
    return[individual_serial(user) for user in users]

def news(new_news) -> dict:
    return {
        "heading" : new_news["heading"],
        "description" : new_news["description"],
        "image" : new_news["image"]
    }

def list_news(news_list) -> list:
    return[news(new_news) for new_news in news_list]


def serialize_cupon(new_cupon) -> dict:
    return {
        "id" : str(new_cupon["_id"]),
        "title" : new_cupon["title"],
        "discount" : new_cupon["discount"],
        "description" : new_cupon["description"],
        "price" : new_cupon["price"],
        "image" : new_cupon["image"]
    }


def serialize_cupons(new_cupons) -> list:
    # return[serialize_cupon(new_cupon) for new_cupon in new_cupons]
    serialized_cupons = []
    for new_cupon in new_cupons:
        if isinstance(new_cupon, dict):
            serialized_cupons.append(serialize_cupon(new_cupon))
        else:
            # Handle the case where new_cupon is not a dictionary
            # You might want to log a warning or handle it in a way that makes sense for your application
            pass
    return serialized_cupons