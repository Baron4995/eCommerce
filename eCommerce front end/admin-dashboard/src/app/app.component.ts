import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'admin-dashboard';
  flag!:boolean;

  constructor(public authservice:AuthService, private router:Router, private route:ActivatedRoute){}

  // navigationLoggedIn = [
  //   {path: "/users", label: "Users"},
  //   {path: "/products", label: "Products"},
  //   {path: "/orders", label: "Orders"},
  //   {path: "/shipments", label: "Shipments"},
  //   {path: "/payments", label: "Payments"},
    
  //   {path: "/logout", label: "Logout"}
  // ];

  navigationLoggedIn = [
    {path: "/users", label: "Users"},
    {path: "/products", label: "Products"},
    {path: "/orders", label: "Orders"},
    
    {path: "/logout", label: "Logout"}
  ];

  navigation = [
    {path: "/about-us", label: "About Us"},
    {path: "/contact-us", label: "Contact Us"},
    {path: "/login", label: "Login"}
  ];

  ngOnInit(){
    this.authservice.isLoggedIn.subscribe({
      next:(result:any)=>{
        this.flag = result;
      }
    })
  }

  goToDashboard(){
    this.router.navigate(["/"], {relativeTo:this.route});
  }
}
