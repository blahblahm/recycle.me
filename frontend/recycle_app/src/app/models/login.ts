import { Cupons } from "./cupons";

export class currentUserModel {
    public first_name : string;
    public last_name : string;
    public username : string;
    public email : string;
    public points : number;
    public role : string;
    public cupons : Cupons[] = [];

    // constructor(
    //     first_name ? : string,
    //     last_name ? : string,
    //     username ? : string,
    //     email ? : string,
    //     points ? : number,
    //     role ? : string
    // ){
    //     if (first_name && last_name && username && email && points && role) {
            
    //         this.first_name = first_name;
    //         this.last_name = last_name;
    //         this.username = username;
    //         this.email = email;
    //         this.points = points;
    //         this.role = role;
    //     } else {
    //         this.first_name = '';
    //         this.last_name = '';
    //         this.username = '';
    //         this.email = '';
    //         this.points = 0;
    //         this.role = ''
    //     }
    // }
}