import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../product/product.model';
import { ProductService } from '../../product/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sale, Purchase } from '../sale.model';
import { SaleService } from '../sale.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-create',
  templateUrl: './sale-create.component.html',
  styleUrls: ['./sale-create.component.css']
})
export class SaleCreateComponent implements OnInit{

  saleForm!: FormGroup;
  products: Product[]=[];

  constructor( private fb: FormBuilder,
               private productService: ProductService,
               private snackBar: MatSnackBar,
               private router: Router,
               private saleService: SaleService) { }

  generateVendaCodigo(): string {
  const codigo = Math.floor(Math.random() * 1000000);
  return codigo.toString().padStart(6, '');
}

  ngOnInit(): void {
    this.saleForm = this.fb.group({
      vendaCodigo: [this.generateVendaCodigo(), Validators.required],
      vendaData: [new Date(), Validators.required],
      cliId: [null, Validators.required],
      fpgId: [null, Validators.required],
      compras: this.fb.array([], Validators.required)
    });

    this.productService.read().subscribe({
      next: produtos => this.products = produtos,
      error:  err => this.snackBar.open('Erro ao carregar produtos', 'X', {duration: 3000})
    });

    this.addCompra();
  }

  get compras(){
    return this.saleForm.get('compras') as FormArray;
  }

  createCompra(): FormGroup {
    return this.fb.group({
      proId: [null, Validators.required],
      compraQuantidade: [1, [Validators.required, Validators.min(1)]],
      compraPrecoVenda: [0, [Validators.required, Validators.min(0)]]
    });
  }

  addCompra(): void {
    this.compras.push(this.createCompra());
  }

  removeCompra(index: number): void {
    this.compras.removeAt(index);
  }

  onProdutoChange(index: number): void {
    const compraGroup = this.compras.at(index);
    const proId = compraGroup.get('proId')?.value;

    const produto = this.products.find(p => p.proId === proId);
    if(produto) {
      compraGroup.patchValue({
        compraPrecoVenda: produto.proPrecoVenda
      });
    } else {
      compraGroup.patchValue({
        compraPrecoVenda: 0
      });
    }
  }

  onSubmit(): void {
  const raw = this.saleForm.value;

  const vendaValorTotal = raw.compras.reduce(
    (sum: number, item: Purchase) => sum + item.compraQuantidade * item.compraPrecoVenda,
    0
  );

  const sale: Sale = {
    ...raw,
    vendaValorTotal,
    vendaData: new Date(raw.vendaData).toISOString() // LocalDateTime espera esse formato
  };

  this.saleService.create(sale).subscribe({
    next: () => {
      this.snackBar.open('Venda criada com sucesso!', 'X', { duration: 3000 });
      this.router.navigate(['/sales']);
    },
    error: (err) => {
      this.snackBar.open('Erro ao criar venda', 'X', { duration: 3000 });
      console.error(err);
      console.log(sale);
    }
  });
}


}
