import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/components/payment/payment.model';
import { PaymentService } from 'src/app/components/payment/payment.service';

@Component({
  selector: 'app-payment-menu',
  templateUrl: './payment-menu.component.html',
  styleUrls: ['./payment-menu.component.css']
})
export class PaymentMenuComponent implements OnInit{

  allPayment: Payment[] = [];

  constructor(
       private router: Router,
       private paymentService: PaymentService) { }


       navigateToPaymentCreate(): void {
      this.router.navigate(['/payments/create']);
    }

    ngOnInit(): void {
      this.paymentService.read().subscribe((payment: Payment[]) => {
       this.allPayment = payment;
     })
    }

}

