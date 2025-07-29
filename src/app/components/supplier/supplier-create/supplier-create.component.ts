import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier.model';
import { Router } from '@angular/router';
import { SupplierService } from '../supplier.service';
import { HttpClient } from '@angular/common/http';

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
              private router: Router,
              private http: HttpClient
            ) {}

  ngOnInit(): void { }

  createSupplier(): void {
    this.supplierService.create(this.supplier).subscribe(() => {
      this.supplierService.showMessage('Fornecedor criado com sucesso!');
      this.router.navigate(['/suppliers']);
    });
  }

  findCEP(): void {
    const cep = this.supplier.endCep?.replace(/\D/g, '');

    if (cep && cep.length === 8) {
      this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`).subscribe({
        next: (data) => {
          if (!data.erro) {
            this.supplier.endRua = data.logradouro;
            this.supplier.endCidade = data.localidade;
            this.supplier.endEstado = data.uf;
          }
        },
        error: () => {
          console.error('Erro ao buscar o CEP');
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/suppliers']);
  }

}