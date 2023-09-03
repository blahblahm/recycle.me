import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class RoleUpdateService{

    constructor(public http:HttpClient) {}

    updateRole(userEmail : string, newRole : string) {
        return this.http.post(`http://127.0.0.1:8000/update_role/${userEmail}`, { "role" : newRole})
    }
}