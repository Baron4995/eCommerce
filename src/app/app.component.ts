import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-dashboard';

  navigation = [
    {path: "/users", label: "Users"},
    {path: "/products", label: "Products"},
    {path: "/orders", label: "Orders"},
    {path: "/shipments", label: "Shipments"},
    {path: "/payments", label: "Payments"},
    {path: "/login", label: "Login"}
  ];
}
