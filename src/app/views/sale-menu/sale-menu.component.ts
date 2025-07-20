import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-menu',
  templateUrl: './sale-menu.component.html',
  styleUrls: ['./sale-menu.component.css']
})
export class SaleMenuComponent {

  constructor(private router: Router) {}

  navigateToSaleCreate(): void {
      this.router.navigate(['/sales/create']);
    }
}
