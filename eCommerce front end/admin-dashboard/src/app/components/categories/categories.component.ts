import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Categories } from './categories-list/categories';
import { CategoriesService } from './categories-list/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  categories:Array<Categories> = [];
  addCategoryForm!: FormGroup;

  constructor(public categoriesService:CategoriesService, private router:Router, private route:ActivatedRoute, public modal:NgbModal){}

  ngOnInit(): void{
    this.loadAllCategories();
    this.addCategoryForm = new FormGroup({
      cid: new FormControl(""),
      categoryName: new FormControl(""),
      categoryDescription: new FormControl(""),
      categoryImageUrl: new FormControl("")
    })
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

  addCategoryDetails(addCategory:any){
    this.modal.open(addCategory);
  }

  storeCategory(){
    let category = this.addCategoryForm.value;
    this.categoriesService.storteCategory(category).subscribe({
      next:(data:any)=>{
        alert("New category stored succesfully");
        console.log(data);
      },
      error:(error:any)=>{
        console.log(error);
      },
      complete:()=>{
        this.loadAllCategories();
        console.log("Completed");
      }
    })
    this.addCategoryForm.reset();
    console.log(category);
  }

  deleteCategory(cid:any){
    let flagDelete = confirm("Are you sure you want to delete this category?");

    if(flagDelete){
      this.categoriesService.deleteCategoryById(cid).subscribe({
        next:(data:any)=>{
          console.log(data);
          this.loadAllCategories();
        },
        error:(error:any)=>{
          console.log(error);
        },
        complete:()=>{
          this.loadAllCategories();
          alert("Category succesfully deleted :)");
          console.log("Task Completed");
        }
      })
    }else{
      alert("Category was not deleted");
    }
  }


  searchCategory(categoryName:any){
    this.categoriesService.searchCaregory(categoryName).subscribe({
      next:(data:any)=>{
        // this.categories.splice(0, this.categories.length);
        this.categories = data;
      },
      error:(error:any)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("Completed");
      }
    })
  }

  updateCategory(category:any, updateCategory:any){
    // console.log(category);
    this.addCategoryForm.patchValue({
      cid:category.cid,
      categoryName:category.categoryName,
      categoryDescription:category.categoryDescription,
      categoryImageUrl:category.categoryImageUrl
    });
    this.modal.open(updateCategory);
  }

  updateCategoryFromDb(){
    this.categoriesService.updateCategory(this.addCategoryForm.value).subscribe({
      next:(data:any)=>{
        alert("Category updated succesfully");
        console.log(data);
      },
      error:(error:any)=>{
        console.log(error);
      },
      complete:()=>{
        this.loadAllCategories();
        console.log("Completed");
      }
    })
    window.location.reload();
    this.addCategoryForm.reset();
  }

}
