import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ProductsComponent } from './components/products/products.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsersComponent } from './components/users/users.component';
import { WhishlistComponent } from './components/whishlist/whishlist.component';


const routes: Routes = [
  {path: "", component: DashboardComponent, canActivate: [AuthGuard]},
  {path: "users", component: UsersComponent},
  {path: "products", component: ProductsComponent},
  {path: "products", children: [
    {path: "categories", component: CategoriesComponent}
  ]},
  {path: "cart", component:CartComponent},
  {path: "wishlist", component:WhishlistComponent},
  {path: "orders", component: OrdersComponent},
  {path: "shipments", component: ShipmentsComponent},
  {path: "payments", component: PaymentsComponent},
  {path: "login", component: LoginComponent},
  {path: "logout", component: LogoutComponent},
  {path: "signup", component: SignupComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "contact-us", component: ContactUsComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
