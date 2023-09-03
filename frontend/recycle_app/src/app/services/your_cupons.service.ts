import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { currentUserModel } from "../models/login";
import { Cupons } from "../models/cupons";

@Injectable() 
export class YourCuponsService {

    currentUser : currentUserModel = new currentUserModel();
    userCupons : Cupons[];


    constructor(public http : HttpClient){}

    getUserCupons() {
        const user = localStorage.getItem('token');
        this.currentUser = JSON.parse(user);
        this.http.get(`http://127.0.0.1:8000/${this.currentUser.email}`).subscribe((result : any) => {
            this.userCupons = result.cupons.map(cupon => new Cupons(cupon.id, cupon.title, cupon.discount, cupon.description, cupon.price, cupon.image))
            console.log(this.userCupons)
        })
}
}