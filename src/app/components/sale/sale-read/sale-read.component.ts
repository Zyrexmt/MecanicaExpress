import { Component, Input } from '@angular/core';
import { SaleService } from '../sale.service';
import { Sale } from '../sale.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-read',
  templateUrl: './sale-read.component.html',
  styleUrls: ['./sale-read.component.css']
})
export class SaleReadComponent {

  @Input() sales: Sale[] = [];


  constructor(private saleService: SaleService, private router: Router) {}

  ngOnInit(): void {
    this.loadSales();
  }

  loadSales(): void{
    this.saleService.read().subscribe({
      next: (data) => this.sales = data,
      error: (err) => {
        console.error('Erro ao carregar vendas', err);
        this.saleService.showMessage('Erro ao carregar vendas');
      }
    });
}

  onInfoClick(sale: Sale): void {
    
    console.log('Informações da venda:', sale);
    this.saleService.showMessage(`Venda ${sale.vendaCodigo} clicada.`);
  }
}
