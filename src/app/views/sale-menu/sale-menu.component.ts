import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sale } from 'src/app/components/sale/sale.model';
import { SaleService } from 'src/app/components/sale/sale.service';

@Component({
  selector: 'app-sale-menu',
  templateUrl: './sale-menu.component.html',
  styleUrls: ['./sale-menu.component.css']
})
export class SaleMenuComponent implements OnInit{

  allSale: Sale[] = [];
  searchText: string = '';
  saleFilter: Sale[] = [];

  constructor(private router: Router, private saleService: SaleService) {}



  navigateToSaleCreate(): void {
      this.router.navigate(['/sales/create']);
    }

    ngOnInit(): void {
      this.saleService.read().subscribe((sale: Sale[]) => {
       this.allSale = sale;
     })
    }


    filterSales(): void {
      const filter = this.searchText.toLocaleLowerCase();
      this.saleFilter = this.allSale.filter(f => 
        f.cliId?.toString().includes(filter) ||
        f.vendaCodigo.toString().includes(filter)
      );
    }
    
}
