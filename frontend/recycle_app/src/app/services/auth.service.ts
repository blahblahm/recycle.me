import { Injectable } from '@angular/core';
import { currentUserModel } from '../models/login';

@Injectable()


export class AuthService {

    currentUser : currentUserModel = new currentUserModel();

    isLoggedIn() : boolean {
        const user = localStorage.getItem('token')
        if (user) {
            this.currentUser = JSON.parse(user)
            return true;
        }
        return false
    }

    getUserRole() {
        return this.currentUser.role
    }
}