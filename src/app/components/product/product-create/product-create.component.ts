import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

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
    proCodigoBarras: '',
    proMarca: '',
    proUnidadeMedida: '',
    proAtivo: 'Ativo',
    proDataCadastro: new Date().toISOString(),
    proDataAtualizacao: new Date().toISOString(),
    proFornecedor: 0
  }

  constructor(private productService: ProductService,
              private router: Router) {}

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
