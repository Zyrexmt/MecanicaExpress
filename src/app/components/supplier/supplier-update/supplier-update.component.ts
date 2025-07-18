import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../supplier.model';

@Component({
  selector: 'app-supplier-update',
  templateUrl: './supplier-update.component.html',
  styleUrls: ['./supplier-update.component.css']
})
export class SupplierUpdateComponent {
  supplier!: Supplier;

  constructor(private supplierService: SupplierService,
              private router: Router,
              private route: ActivatedRoute) { }
              
  ngOnInit(): void {
    const forId = this.route.snapshot.paramMap.get('forId');
    this.supplierService.readById(forId!).subscribe((supplier: Supplier) => {
      this.supplier = supplier;
    });
  }

  updateSupplier(): void {
    this.supplierService.update(this.supplier).subscribe(() => {
      this.supplierService.showMessage('Fornecedor atualizado com sucesso!');
      this.router.navigate(['/suppliers']);
    });
  }

  cancel(): void {
    this.router.navigate(['/suppliers']);
  }

}
