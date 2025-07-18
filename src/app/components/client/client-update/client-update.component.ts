import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent {
  client!: Client;

  constructor(private clientService: ClientService,
              private router: Router,
              private route: ActivatedRoute) { }
              
  ngOnInit(): void {
    const cliId = this.route.snapshot.paramMap.get('cliId');
    this.clientService.readById(cliId!).subscribe((client: Client) => {
      this.client = client;
    });
  }

  updateClient(): void {
    this.clientService.update(this.client).subscribe(() => {
      this.clientService.showMessage('Cliente atualizado com sucesso!');
      this.router.navigate(['/clients']);
    });
  }

  cancel(): void {
    this.router.navigate(['/clients']);
  }
}
