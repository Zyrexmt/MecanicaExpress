import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../payment.service';
import { Payment } from '../payment.model';

@Component({
  selector: 'app-payment-delete',
  templateUrl: './payment-delete.component.html',
  styleUrls: ['./payment-delete.component.css']
})
export class PaymentDeleteComponent {

  payment!: Payment;

  constructor(
    private paymentService: PaymentService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const fpgId = this.route.snapshot.paramMap.get('fpgId');
    this.paymentService.readById(fpgId!).subscribe(payment => {
      this.payment = payment;
    });
  }

  deletePayment(): void {
    this.paymentService.delete(this.payment.fpgId!).subscribe(() => {
      this.paymentService.showMessage('Forma de pagamento excluída com sucesso!');
      this.router.navigate(['/payments']);
    });
  }

  cancel(): void {
    this.router.navigate(['/payments']);
  }

}
