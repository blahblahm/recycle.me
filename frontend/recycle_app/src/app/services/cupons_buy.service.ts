import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { currentUserModel } from "../models/login";
import { Cupons } from "../models/cupons";
import { Router } from "@angular/router";

@Injectable() 

export class CuponsBuyService {

    constructor(public http : HttpClient, public router : Router){}

    buyCupon(currentUser : currentUserModel, buychosenCupon : Cupons) {
    
        const data = {
        email : currentUser.email,
        cupon_id : buychosenCupon.id
        } 

        this.http.post('http://127.0.0.1:8000/cupons/buy', data).subscribe((result : any) => {
      alert('You have successfully bought chousen coupon!')
      this.http.get(`http://127.0.0.1:8000/${currentUser.email}`).subscribe((result : any) => {
        const user = JSON.stringify(result);
        localStorage.setItem('token', user);
        this.router.navigate(["your_cupons"]);
      })
        },
        (error) => {
        alert("You don't have enougt money to buy this this.chooseCupon.")
        })
    }
}
