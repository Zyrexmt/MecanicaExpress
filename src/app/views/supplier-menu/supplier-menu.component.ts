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

  searchText: string = '';
  allSupplier: Supplier[] = [];
  supplierFilter: Supplier[] = [];

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

    filterSuppliers(): void {
      const filter = this.searchText.toLowerCase();
      this.supplierFilter = this.allSupplier.filter(f =>
        f.forId?.toString().includes(filter) ||
        f.forNomeFantasia.toLowerCase().includes(filter) ||
        f.forCnpj.toLowerCase().includes(filter) ||
        f.endCidade.toLowerCase().includes(filter) ||
        f.endEstado.toLowerCase().includes(filter)
      );
    }
}
