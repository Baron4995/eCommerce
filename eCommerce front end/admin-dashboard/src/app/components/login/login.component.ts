import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authService:AuthService, public router:Router){}
  
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      emailid: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    });
  }


  msg:String = "";

  onSubmit(){

    let x = this.loginForm.value;
    
    // if(this.authService.signIn(x)){
    //   alert("Successfully Login");
    //   sessionStorage.setItem("x", x.email);
    //   this.router.navigate([""]);
    // }else{
    //   alert("Failure To Login");
    // }


    if(!this.loginForm.get('emailid').valid || !this.loginForm.get('password').valid){
      this.msg = "Please check your email and/or your password";
    }
    else if(this.loginForm.get('emailid').valid && this.loginForm.get('password').valid){
      this.msg = "";
    }
    else{
      console.log(this.loginForm);
    }
    
    // this.authService.signIn(x).subscribe({
    //   next:(result:any)=>{
    //     if(result == "Successfully Logged in"){
    //       console.log(result);
    //       alert("Successfully Logged in");
    //       console.log(result);
    //       sessionStorage.setItem("x", x.email);
    //       this.router.navigate([""]);
    //     }else{
    //       console.log(result);
    //       alert("Failure To Login");
    //     }
    //   },
    //   error:(error:any)=>{
    //     console.log(error);
    //   },
    //   complete:()=>{
    //     console.log("Admin Loggin task done");
    //   }
    // })

    if(this.authService.signIn(x) == "Successfully Logged in"){
      console.log("Successfully Logged in");
      alert("Successfully Logged in");
      console.log(x);
      sessionStorage.setItem("x", x.email);
      this.router.navigate([""]);
    }




    this.loginForm.reset();
  }
}
