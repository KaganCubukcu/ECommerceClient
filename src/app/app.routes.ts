import { Routes } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';
import { LayoutComponent } from './admin/layout/layout.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'customers',
        loadComponent: () =>
          import('./admin/components/customer/customer.component').then(
            (c) => c.CustomerComponent
          ),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./admin/components/order/order.component').then(
            (c) => c.OrderComponent
          ),
      },
      {
        path: 'products',
        loadComponent: () =>
          import(
            './admin/components/admin-products/admin-products.component'
          ).then((c) => c.AdminProductsComponent),
      },
    ],
  },
  { path: '', component: HomeComponent },
  {
    path: 'baskets',
    loadComponent: () =>
      import('./ui/components/baskets/baskets.component').then(
        (c) => c.BasketsComponent
      ),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./ui/components/products/products.component').then(
        (c) => c.ProductsComponent
      ),
  },
];
