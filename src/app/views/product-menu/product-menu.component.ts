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
  
    searchText: string = '';
    allProduct: Product[] = [];
    productFilter: Product[] = [];
  
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

      filterProducts(): void {
      const filter = this.searchText.toLowerCase();
      this.productFilter = this.allProduct.filter(f =>
        f.proId?.toString().includes(filter) ||
        f.proNome.toLowerCase().includes(filter) ||
        f.proCategoria.toLowerCase().includes(filter) ||
        f.proAtivo.toLowerCase().includes(filter) ||
        f.proMarca.toLowerCase().includes(filter) ||
        f.proCodigoBarras.toLowerCase().includes(filter)
      );
    }
}
