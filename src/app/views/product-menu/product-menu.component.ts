import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/components/product/product.service';
import { Product } from 'src/app/components/product/product.model';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent implements OnInit {
  
    allProduct: Product[] = [];
  
    constructor(
         private router: Router,
         private productService: ProductService) { }
  
  
         navigateToProductCreate(): void {
        this.router.navigate(['/products/create']);
      }
  
      ngOnInit(): void {
        this.productService.read().subscribe((product: Product[]) => {
         this.allProduct = product;
       })
      }
}
