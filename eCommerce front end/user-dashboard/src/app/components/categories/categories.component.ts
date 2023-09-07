import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from './categories-list/categories';
import { CategoriesService } from './categories-list/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  categories:Array<Categories> = [];

  constructor(public categoriesService:CategoriesService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(){

    this.loadAllCategories();

  }

  loadAllCategories(){
    this.categoriesService.loadAllCategories().subscribe({
      next:(result:any) =>{
        this.categories = result;
      },
      error:(error:any) => {
      },
      complete:() => {
      } 
    })
  }

  backToProducts(){
    this.router.navigate(["/products"], {relativeTo: this.route})
  }

}
