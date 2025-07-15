import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit{

  client: Client = {
    cliNome: '',
    cliCpf: '',
    endCep: '',
    endCidade: '',
    endEstado: '',
    endNumero: '',
    endRua: '',
    conCelular: '',
    conTelefoneComercial: '',
    conEmail: '',
  };

  constructor(private clientService: ClientService,
               private router: Router){}

  ngOnInit(): void {
    
  }

  createClient(): void{
    this.clientService.create(this.client).subscribe(() => {
      this.clientService.showMessage('Cliente criado com sucesso!');
      this.router.navigate(['/clients']);
    });
  }

  cancel(): void{
    this.router.navigate(['/clients']);
  }

}
