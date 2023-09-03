import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { News } from "../models/news";

@Injectable()
export class NewsService {

    news: News[] = [];

    constructor(public http : HttpClient) {}

    getNews() {
        this.http.get('http://127.0.0.1:8000/news').subscribe (
            (result : any) => {
                console.log(result)
                this.news = result.map((new_news : any) => new News(new_news.heading, new_news.description, new_news.image));
            }
        )
    }
}