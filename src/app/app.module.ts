import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductMenuComponent,
    SupplierMenuComponent,
    ClientMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
