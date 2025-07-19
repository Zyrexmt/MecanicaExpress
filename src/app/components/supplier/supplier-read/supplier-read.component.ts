import { Component, Input } from '@angular/core';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../supplier.model';

@Component({
  selector: 'app-supplier-read',
  templateUrl: './supplier-read.component.html',
  styleUrls: ['./supplier-read.component.css']
})
export class SupplierReadComponent {

  @Input() supplier: Supplier[] = [];
  displayedColumns = ['forId', 'forNomeFantasia', 'forCnpj', 'conEmail', 'conTelefoneComercial', 'endCidade', 'endEstado', 'actions'];

  constructor(private supplierService: SupplierService) { }
  
  ngOnInit(): void {
    this.supplierService.read().subscribe(supplier => {
      this.supplier = supplier;
      console.log(supplier);
    });
  }

}
