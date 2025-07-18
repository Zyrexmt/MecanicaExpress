import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierService } from 'src/app/components/supplier/supplier.service';
import { Supplier } from 'src/app/components/supplier/supplier.model';

@Component({
  selector: 'app-supplier-menu',
  templateUrl: './supplier-menu.component.html',
  styleUrls: ['./supplier-menu.component.css']
})
export class SupplierMenuComponent implements OnInit {

  allSupplier: Supplier[] = [];

  constructor(
       private router: Router,
       private supplierService: SupplierService) { }


       navigateToSupplierCreate(): void {
      this.router.navigate(['/suppliers/create']);
    }

    ngOnInit(): void {
      this.supplierService.read().subscribe((supplier: Supplier[]) => {
       this.allSupplier = supplier;
     })
    }

}
