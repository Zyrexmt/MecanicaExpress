import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../client.model';


@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent {

  client!: Client;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      const cliId = this.route.snapshot.paramMap.get('cliId');
      this.clientService.readById(cliId!).subscribe(client => {
        this.client = client;
      });
    }

    deleteClient(): void {
      this.clientService.delete(this.client.cliId!).subscribe(() => {
        this.clientService.showMessage('Cliente excluído com sucesso!');
        this.router.navigate(['/clients']);
      });
    }

    cancel(): void {
      this.router.navigate(['/clients']);
    }
}
