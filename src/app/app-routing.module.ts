import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component'; 
import { ProductMenuComponent } from './views/product-menu/product-menu.component';
import { SupplierMenuComponent } from './views/supplier-menu/supplier-menu.component';
import { ClientMenuComponent } from './views/client-menu/client-menu.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { SupplierCreateComponent } from './components/supplier/supplier-create/supplier-create.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { PaymentMenuComponent } from './views/payment-menu/payment-menu.component';
import { PaymentCreateComponent } from './components/payment/payment-create/payment-create.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { SupplierUpdateComponent } from './components/supplier/supplier-update/supplier-update.component';
import { SupplierDeleteComponent } from './components/supplier/supplier-delete/supplier-delete.component';
import { PaymentUpdateComponent } from './components/payment/payment-update/payment-update.component';
import { PaymentDeleteComponent } from './components/payment/payment-delete/payment-delete.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { SaleCreateComponent } from './components/sale/sale-create/sale-create.component';
import { SaleMenuComponent } from './views/sale-menu/sale-menu.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductMenuComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/delete/:proId",
    component: ProductDeleteComponent
  },
  {
    path: "products/update/:proId",
    component: ProductUpdateComponent
  },
  {
    path: "suppliers",
    component: SupplierMenuComponent
  },
  {
    path: "suppliers/create",
    component: SupplierCreateComponent
  },
  {
    path: "suppliers/update/:forId",
    component: SupplierUpdateComponent
  },
  {
    path: "suppliers/delete/:forId",
    component: SupplierDeleteComponent
  },
  {
    path: "clients",
    component: ClientMenuComponent
  },
  {
    path: "clients/create",
    component: ClientCreateComponent
  },
  {
    path: "clients/update/:cliId",
    component: ClientUpdateComponent
  },
  {
    path: "clients/delete/:cliId",
    component: ClientDeleteComponent
  },
  {
    path: "payments",
    component: PaymentMenuComponent
  },
  {
    path: "payments/create",
    component: PaymentCreateComponent
  },
  {
    path: "payments/update/:fpgId",
    component: PaymentUpdateComponent
  },
  {
    path: "payments/delete/:fpgId",
    component: PaymentDeleteComponent
  },
  {
    path: "sales",
    component: SaleMenuComponent
  },
  {
    path: "sales/create",
    component: SaleCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
