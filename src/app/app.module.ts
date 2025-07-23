import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from "./components/template/sidebar/sidebar.component";
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { MatCardModule } from "@angular/material/card";
import { ProductMenuComponent } from './views/product-menu/product-menu.component';
import { SupplierMenuComponent } from './views/supplier-menu/supplier-menu.component';
import { ClientMenuComponent } from './views/client-menu/client-menu.component';
import { MatTableModule } from '@angular/material/table';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SupplierCreateComponent } from './components/supplier/supplier-create/supplier-create.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PaymentCreateComponent } from './components/payment/payment-create/payment-create.component';
import { PaymentMenuComponent } from './views/payment-menu/payment-menu.component';
import { ClientReadComponent } from './components/client/client-read/client-read.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { SupplierReadComponent } from './components/supplier/supplier-read/supplier-read.component';
import { SupplierUpdateComponent } from './components/supplier/supplier-update/supplier-update.component';
import { SupplierDeleteComponent } from './components/supplier/supplier-delete/supplier-delete.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { PaymentReadComponent } from './components/payment/payment-read/payment-read.component';
import { PaymentUpdateComponent } from './components/payment/payment-update/payment-update.component';
import { PaymentDeleteComponent } from './components/payment/payment-delete/payment-delete.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { SaleCreateComponent } from './components/sale/sale-create/sale-create.component';
import { SaleMenuComponent } from './views/sale-menu/sale-menu.component';
import { SaleReadComponent } from './components/sale/sale-read/sale-read.component';

  registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductMenuComponent,
    SupplierMenuComponent,
    ClientMenuComponent,
    ProductCreateComponent,
    SupplierCreateComponent,
    ClientCreateComponent,
    PaymentCreateComponent,
    PaymentMenuComponent,
    ClientReadComponent,
    ClientDeleteComponent,
    ClientUpdateComponent,
    SupplierReadComponent,
    SupplierUpdateComponent,
    SupplierDeleteComponent,

    ProductReadComponent,
      PaymentReadComponent,
      PaymentUpdateComponent,
      PaymentDeleteComponent,
      ProductDeleteComponent,
      ProductUpdateComponent,
      SaleCreateComponent,
      SaleMenuComponent,
      SaleReadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
