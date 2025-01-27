import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AdminProductCreateComponent } from "./admin-product-create/admin-product-create.component";
import { AdminProductListComponent } from "./admin-product-list/admin-product-list.component";
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-admin-products',
  imports: [MatSidenavModule, AdminProductCreateComponent, AdminProductListComponent, MatGridListModule],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent {

}
