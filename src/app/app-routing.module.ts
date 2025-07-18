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
    path: "suppliers",
    component: SupplierMenuComponent
  },
  {
    path: "suppliers/create",
    component: SupplierCreateComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
