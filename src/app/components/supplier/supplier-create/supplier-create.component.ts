import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier.model';
import { Router } from '@angular/router';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.css']
})
export class SupplierCreateComponent implements OnInit {

  supplier: Supplier = {
    forNomeFantasia: '',
    forCnpj: '',
    forRazaoSocial: '',
    endRua: '',
    endNumero: '',
    endCidade: '',
    endCep: '',
    endEstado: '',
    conCelular: '',
    conTelefoneComercial: '',
    conEmail: ''
  };

  constructor(private supplierService: SupplierService,
              private router: Router) {}

  ngOnInit(): void { }

  createSupplier(): void {
    this.supplierService.create(this.supplier).subscribe(() => {
      this.supplierService.showMessage('Fornecedor criado com sucesso!');
      this.router.navigate(['/suppliers']);
    });
  }

  cancel(): void {
    this.router.navigate(['/suppliers']);
  }

}