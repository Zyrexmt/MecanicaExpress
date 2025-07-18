import { Component } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Payment } from '../payment.model';

@Component({
  selector: 'app-payment-read',
  templateUrl: './payment-read.component.html',
  styleUrls: ['./payment-read.component.css']
})
export class PaymentReadComponent {



  payment!: Payment[];
  displayedColumns = ['fpgId', 'fpgTipo', 'fpgDescricao', 'fpgPermiteParcelamento', 'fpgNumMaxParcelas', 'fpgTaxaAdicional', 'actions'];

  constructor(private paymentService: PaymentService) { }
  
  ngOnInit(): void {
    this.paymentService.read().subscribe(payments => {
      this.payment = payments;
      console.log(payments);
    });
  }
  
}
