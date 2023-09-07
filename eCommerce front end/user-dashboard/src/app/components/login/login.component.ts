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
  
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      emailid: new FormControl(""),
      password: new FormControl("")
    });
  }

  msg:String = "";

  onSubmit(){

    let user = this.loginForm.value;

  //   this.authService.signIn(user).subscribe({
  //     next:(data:any)=>{
  //       let result = data.find((u:any)=>u.emailid == user.emailid && u.password == user.password);
  //       console.log(result);
  //       if(result != undefined){
  //         alert("Succesfully Logged In!")
  //         sessionStorage.setItem("user", JSON.stringify(result));
  //         this.router.navigate([""]);
  //       }else{
  //         alert("Failure To Login");
  //         this.msg = "Invalid email or password";
  //       }
  //     },
  //     error:(error:any)=>{
  //       console.log(error);
  //     },
  //     complete:()=>{
  //       console.log("Log in done!");
  //     }
  //   })

  //   this.loginForm.reset();

    this.authService.signIn(user).subscribe({
      next:(data:any)=>{
        if(data === "Successfuly signed in"){
          console.log(data);
          alert("Sign in Successfully");
          sessionStorage.setItem("user", JSON.stringify(user));
          this.router.navigate([""]);
        }else{
          console.log(data);
          alert("Failure To Login");
          this.msg = "Invalid email or password";
        }
      },
      error:(error:any)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("Sign in task done!");
      }
    })

    this.loginForm.reset();
  }

 
}
