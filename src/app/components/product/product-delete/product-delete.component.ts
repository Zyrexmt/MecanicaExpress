import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {

  product!: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const proId = this.route.snapshot.paramMap.get('proId');
    this.productService.readById(proId!).subscribe(product => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    this.productService.delete(this.product.proId!).subscribe(() => {
      this.productService.showMessage('Produto excluído com sucesso!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
