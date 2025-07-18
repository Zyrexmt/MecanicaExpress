import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent {

  product!: Product[];
  displayedColumns = ['proNome', 'proPrecoCusto','proPrecoVenda', 'proQuantidadeEstoque', 'proCategoria', 'proCodigoBarras', 'proMarca', 'proAtivo', 'forId', 'actions'];

  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.product = products;
      console.log(products);
    });
  }

}
