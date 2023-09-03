from pymongo import MongoClient

client = MongoClient("mongodb+srv://admin:a0FVpmAdaPtlWXyN@cluster0.3xsuuds.mongodb.net/?retryWrites=true&w=majority")

db = client.recycle_db

collection_users = db["users"]

collection_news = db["news"]

collection_cupons = db["cupons"]