import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(public authService:AuthService, private router:Router, private route:ActivatedRoute) {}

  signupForm:FormGroup;
  msg:string = "";

  // ngOnInit(): void {
  //   this.signupForm = new FormGroup({
  //     username:new FormControl(""),
  //     fullName:new FormControl(""),
  //     address:new FormGroup({
  //       street:new FormControl(""),
  //       city:new FormControl(""),
  //       state:new FormControl(""),
  //       country:new FormControl(""),
  //       pincode:new FormControl("")
  //     }),
  //     emailid:new FormControl("", [Validators.required, Validators.email]),
  //     password:new FormControl("", [Validators.required]),
  //     img:new FormControl(""),
  //     contact:new FormControl("")
  //   })
  // }

   ngOnInit(): void {
    this.signupForm = new FormGroup({
      username:new FormControl(""),
      fullName:new FormControl(""),
        street:new FormControl(""),
        city:new FormControl(""),
        state:new FormControl(""),
        country:new FormControl(""),
        pincode:new FormControl(""),
      emailid:new FormControl("", [Validators.required, Validators.email]),
      password:new FormControl("", [Validators.required]),
      img:new FormControl(""),
      contact:new FormControl("")
    })
  }

  signUp() {
    let user = this.signupForm.value;
    console.log(user);
    this.authService.signUp(user).subscribe({
      next:(result:any)=>{
        console.log(result);
        if(result == "Successfully signed up"){
          console.log(result);
          alert("Account Successfully created");
        }else{
          alert("Account could not create, please try again");
        }
      },
      error:(error:any)=>{

      },
      complete:()=>{
        console.log("Account Created!");
      }
    })
    this.signupForm.reset();
    this.router.navigate(["/login"], {relativeTo:this.route});
  }

}
