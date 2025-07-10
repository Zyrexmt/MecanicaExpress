import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component'; 
import { ProductMenuComponent } from './views/product-menu/product-menu.component';
import { SupplierMenuComponent } from './views/supplier-menu/supplier-menu.component';
import { ClientMenuComponent } from './views/client-menu/client-menu.component';


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
    path: "suppliers",
    component: SupplierMenuComponent
  },
  {
    path: "clients",
    component: ClientMenuComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
