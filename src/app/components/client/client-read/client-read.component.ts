import { Component, Input} from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent {
  @Input() client: Client[] = [];
  displayedColumns = ['cliId', 'cliNome', 'cliCpf', 'conEmail', 'conTelefoneComercial', 'endCidade', 'endEstado', 'actions'];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.read().subscribe(client => {
      this.client = client;
      console.log(client);
    });
  }

}
