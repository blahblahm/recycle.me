import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from '../helpers/validateForm';

@Component({
  selector: 'register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register_style/register-user.component.scss']
})
export class RegisterUserComponent implements OnInit{
  // first_name : string = "";
  // last_name : string = "";
  // username : string = "";
  // email : string = "";
  // password : string = "";
  public registrationForm !: FormGroup;
 
  constructor(private formBuilder : FormBuilder, private http:HttpClient, private router : Router)
  {}

  ngOnInit() : void {
    this.registrationForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      points: [0],
      role: ['User']
    })
  }

  onRegister() {
    if(this.registrationForm.valid) {
      this.http.post("http://127.0.0.1:8000/", this.registrationForm.value).subscribe((result : any) => {
      console.log('registration successful');
      alert('You have successfully registered!')
      this.registrationForm.reset();
      this.router.navigate(['login']);} ); 
      
    } else {
      ValidateForm.validateAllFormFields(this.registrationForm)
      alert('Informations you put in are invalid')
    }
  }
 
}
