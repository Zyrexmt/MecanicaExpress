import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    proNome: '',
    proDescricao: '',
    proPrecoCusto: 0,
    proPrecoVenda: 0,
    proQuantidadeEstoque: 0,
    proCategoria: '',
    proCodigoBarras: this.generateCodigoBarra(),
    proMarca: '',
    proUnidadeMedida: '',
    proAtivo: 'Ativo',
    proDataCadastro: new Date().toISOString(),
    proDataAtualizacao: new Date().toISOString(),
    forId: 0
  }

  constructor(private productService: ProductService,
              private router: Router) {}

  generateCodigoBarra(): string {
  const codigo = Math.floor(Math.random() * 1000000);
  return codigo.toString().padStart(10, '2007');
}

  view = false;

  ngOnInit(): void { }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }


}

