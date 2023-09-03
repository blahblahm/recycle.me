import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class UpdatePointsService {

    constructor(public http : HttpClient) {}

    updatePoints(userEmail : string, materialWeight : number, materialType : string) {
        return this.http.post(`http://127.0.0.1:8000/${userEmail}`, {"weight" : materialWeight, "material_type" : materialType})
    }
}