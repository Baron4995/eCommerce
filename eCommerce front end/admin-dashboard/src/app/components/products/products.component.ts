import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Categories } from '../categories/categories-list/categories';
import { CategoriesService } from '../categories/categories-list/categories.service';
import { Products } from './products-list/products';
import { ProductsService } from './products-list/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products:Array<Products> = [];
  addProductForm!:FormGroup;
  categoriesArray:Array<Categories>=[];

  constructor(public productService:ProductsService, private router:Router, private route: ActivatedRoute, public modal:NgbModal
    ,public categoryService:CategoriesService){

  }

  ngOnInit(): void{
    this.loadAllProducts();
    this.addProductForm = new FormGroup({
      pid:new FormControl(""), 
      title:new FormControl(""), 
      description:new FormControl(""), 
      price:new FormControl(""), 
      discountPercentage:new FormControl(""),
      rating:new FormControl(""),
      stock:new FormControl(""),
      brand:new FormControl(""),
      category:new FormControl(""),
      thumbnail:new FormControl("")
    })
    this.categoryService.loadAllCategories().subscribe({
      next:(data:any)=>{
        this.categoriesArray = data;
      },
      error:(error:any)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("Task completed");
      }
    })
    this.productService.loadAllProductDetails().subscribe({
      next:(result: any) => {
        this.products = result;
        for(let p of this.products){
          for(let c of this.categoriesArray){
            if(p.cid === c.cid){
              p.category = c.categoryName;
            }
          }
        }
        console.log(result);
      }, error:(error:any) => {
      }, complete:() => {
      }
    })
    
  }

  categories(){
    this.router.navigate(["/products/categories"], {relativeTo: this.route});
  }

  loadAllProducts(){
    this.productService.loadAllProductDetails().subscribe({
      next:(result: any) => {
        this.products = result;
        for(let p of this.products){
          for(let c of this.categoriesArray){
            if(p.cid === c.cid){
              p.category = c.categoryName;
            }
          }
        }
      }, error:(error:any) => {
      }, complete:() => {
      }
    })
  }

  deleteProduct(id:any){
    let flagDelete = confirm("Do you want to delete this product?");

    if(flagDelete){
      this.productService.deleteProductById(id).subscribe({
        next:(result:any) => {
          console.log(result);
        }, error:(error:any) => {
          console.log("Error");
        }, complete:() => {
          // this.loadAllProducts();
          window.location.reload();
          console.log(`Product ${id} deleted`);
        }
      })
    }else{
      alert("Product didn\'t delete")
    }
  }

  addProductDetails(addProduct:any){
    return this.modal.open(addProduct);
  }

  storeProduct(){
    let product = this.addProductForm.value;
    let productInfo = this.categoriesArray.find(c=>c.categoryName===product.category);
    product.cid = productInfo.cid;
    this.productService.storeProduct(product).subscribe({
      next:(data:any)=>{
        alert("Product succesfully stored! :)");
      },
      error:(error:any)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("Taks Completed");
      }
    })
    // this.loadAllProducts();
    this.addProductForm.reset();
    window.location.reload();
  }

  updateProductDetails(product:any, updateProductModal:any){
    this.addProductForm.patchValue({ 
      pid:product.pid,
      title:product.title, 
      description:product.description, 
      price:product.price, 
      discountPercentage:product.discountPercentage,
      rating:product.rating,
      stock:product.stock,
      brand:product.brand,
      category:product.category,
      thumbnail:product.thumbnail
    })
    this.modal.open(updateProductModal, {size:"lg"});
  }

  updateProduct(){
    let product = this.addProductForm.value;
    let productInfo = this.categoriesArray.find(c=>c.categoryName===product.category);
    product.cid = productInfo.cid;
    this.productService.updateProduct(product).subscribe({
      next:(data:any)=>{
        alert("Product successfully updated");
        window.location.reload();
      },
      error:(error:any)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("Taks Completed");
      }
    })
    // this.loadAllProducts();
    this.addProductForm.reset();
    // window.location.reload();
  }
  
}
