import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from '../helpers/validateForm';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login_style/login.component.scss']
})
export class LoginComponent {

  public loginForm !: FormGroup

  // public user3

  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router : Router) {}

  // user3 : currentUserModel;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  onLogin() {
    if(this.loginForm.valid) {
      this.http.get('http://127.0.0.1:8000/').subscribe((result : any) => {
        const user = result.find((id : any) => {
          return id.email == this.loginForm.value.email && id.password === this.loginForm.value.password
        });
        
        if (user) {
          const currentUser = JSON.stringify(user);
          console.log(user.role)
          localStorage.setItem('token', currentUser);
          console.log('Login succesfful');
          this.loginForm.reset();
          if (user.role == 'Admin') {
            this.router.navigate(['admin'])
          } else {
            this.router.navigate(['news'])
          }
      } else {
        alert('Email or password are incorrect');
      }
    });
      
    } else {
      ValidateForm.validateAllFormFields(this.loginForm)
      alert('Informations you put in are invalid')
    }
  }

}
