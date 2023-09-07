import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from './users-list/users';
import { UsersService } from './users-list/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

    users:Array<Users> = [];

    constructor(public userService:UsersService, private router:Router, private route:ActivatedRoute){

    }

    ngOnInit(){
      this.userService.loadAllUserDetails().subscribe({
        next:(result:any) => {
          this.users = result;
        }, error:(error:any) => {
        }, complete:() => {
        }
      })
    }

    backToDashboard(){
      this.router.navigate(["/"], {relativeTo: this.route})
    }

}
