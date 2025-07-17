import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment.model';
import { Router } from '@angular/router';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-create',
  templateUrl: './payment-create.component.html',
  styleUrls: ['./payment-create.component.css']
})
export class PaymentCreateComponent implements OnInit {

  payment: Payment = {
    fpgTipo: '',
    fpgDescricao: '',
    fpgPermiteParcelamento: false,
    fpgNumMaxParcelas: 1,
    fpgTaxaAdicional: 0
  };


  constructor(private paymentService: PaymentService,
              private router: Router) { }

  ngOnInit(): void {
    
  }

  createPayment(): void {
    this.paymentService.create(this.payment).subscribe(() => {
      this.paymentService.showMessage('Forma de pagamento criada com sucesso!');
      this.router.navigate(['/payments']);
    });
  }

  cancel(): void {
    this.router.navigate(['/payments']);
  }

}
