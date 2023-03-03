import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm: FormGroup;

  ngOnInit(){
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required)
    });
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm);
    }
    else{
      alert("invalid form");
    }

  }

  // loginForm = new FormGroup(
  //   { 
  //   email: new FormControl("", [Validators.required, Validators.email]),
  //   password: new FormControl("")
  // }
  // );

  // get emailValidator(){
  //   return this.loginForm.get('email');
  // };
}
