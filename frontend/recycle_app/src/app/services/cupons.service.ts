import { Injectable } from "@angular/core";
import { Cupons } from "../models/cupons";
import { HttpClient } from "@angular/common/http";

@Injectable() 

export class CuponsService {

    cupons : Cupons[] = [];

    constructor(public http : HttpClient){}

    getCupons(){
        this.http.get('http://127.0.0.1:8000/cupons').subscribe((result : any) => {
            console.log(result)
            this.cupons = result.map((cupon : any) => new Cupons(cupon.id, cupon.title, cupon.discount, cupon.description, cupon.price, cupon.image));
        })
    }

}