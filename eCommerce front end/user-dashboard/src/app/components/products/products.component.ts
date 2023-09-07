import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart/cart service/cart.service';
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
  categoriesArray:Array<Categories> = [];
  searchForProducts:any = "";
  wishListProducts:Array<Products> = [];

  constructor(public productService:ProductsService, public cartService:CartService, private router:Router, private route: ActivatedRoute, 
    private allCategories:CategoriesService){

  }

  ngOnInit(): void{
    this.loadAllProducts();
    // this.allCategories.loadAllCategories().subscribe({
    //   next:(result:any)=>{
    //     this.categoriesArray = result;
    //     console.log(result);
    //   },
    //   error:(error:any)=>{
    //     console.log(error);
    //   },
    //   complete:()=>{
    //     console.log("load categories");
    //   }
    // })
  }

  categories(){
    this.router.navigate(["/products/categories"], {relativeTo: this.route});
  }

  loadAllProducts(){
    this.productService.loadAllProductDetails().subscribe({
      next:(result: any) => {
      
        this.products = result;
      }, error:(error:any) => {
      }, complete:() => {
      }
    })
  }

  addToCart(product:any){
    // console.log(product);
    product.qty = 1;
    this.cartService.addDataInCart(product);
  }

  addToWishlist(product:any){
    // let obj = localStorage.getItem("wishListProducts");
    // if(obj == null){
    //   this.wishListProducts.push(product);
    //   localStorage.setItem("wishListProducts", JSON.stringify(this.wishListProducts));
    // }else{
    //   let obj2 = localStorage.getItem("wishListProducts");
    //   if(obj2 != undefined){
    //     let wishListProducts = JSON.parse(obj2);
    //     wishListProducts.push(product);
    //     localStorage.setItem("wishListProducts", JSON.stringify(wishListProducts));
    //   }
    // }
    // let data = localStorage.getItem("wishListProducts");
    // if(data != undefined){
    //   console.log(JSON.parse(data).length);
    // }
  }
}
