import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/components/client/client.model';
import { ClientService } from 'src/app/components/client/client.service';

@Component({
  selector: 'app-client-menu',
  templateUrl: './client-menu.component.html',
  styleUrls: ['./client-menu.component.css']
})
export class ClientMenuComponent implements OnInit{

  searchText: string = '';
  allClient: Client[] = [];
  clientFilter: Client[] = [];

  constructor(
       private router: Router,
       private clientService: ClientService) { }


       navigateToClienteCreate(): void {
      this.router.navigate(['/clients/create']);
    }

    ngOnInit(): void {
      this.clientService.read().subscribe((client: Client[]) => {
       this.allClient = client;
       this.clientFilter = client;
     });
    }

    filterClients(): void {
      const filter = this.searchText.toLowerCase();
      this.clientFilter = this.allClient.filter(f =>
        f.cliId?.toString().includes(filter) ||
        f.cliNome.toLowerCase().includes(filter) ||
        f.cliCpf.toLowerCase().includes(filter) ||
        f.endCidade.toLowerCase().includes(filter) ||
        f.endEstado.toLowerCase().includes(filter)
      );
    }
}
