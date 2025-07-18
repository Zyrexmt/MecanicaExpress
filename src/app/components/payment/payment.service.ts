import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Payment } from './payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrl = 'http://localhost:8080/formapagamentos';

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000, // Duração da mensagem em milissegundos
      horizontalPosition: 'right', // Posição horizontal
      verticalPosition: 'top' // Posição vertical
    });
  }

  create(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(this.baseUrl, payment);
  }

  read(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.baseUrl);
  }

  readById(fpgId: string): Observable<Payment> {
    const url = `${this.baseUrl}/${fpgId}`;
    return this.http.get<Payment>(url);
  }

  update(payment: Payment): Observable<Payment> {
    const url = `${this.baseUrl}/${payment.fpgId}`;
    return this.http.put<Payment>(url, payment);
  }

  delete(id: number): Observable<Payment> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Payment>(url);
  }
}
