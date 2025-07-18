import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../payment.service';
import { Payment } from '../payment.model';


@Component({
  selector: 'app-payment-update',
  templateUrl: './payment-update.component.html',
  styleUrls: ['./payment-update.component.css']
})
export class PaymentUpdateComponent {

  payment!: Payment;

  constructor(private paymentService: PaymentService,
              private router: Router,
              private route: ActivatedRoute) { }
              
  ngOnInit(): void {
    const fpgId = this.route.snapshot.paramMap.get('fpgId');
    this.paymentService.readById(fpgId!).subscribe((payment: Payment) => {
      this.payment = payment;
    });
  }

  updatePayment(): void {
    this.paymentService.update(this.payment).subscribe(() => {
      this.paymentService.showMessage('Forma de pagamento atualizada com sucesso!');
      this.router.navigate(['/payments']);
    });
  }

  cancel(): void {
    this.router.navigate(['/payments']);
  }

}
