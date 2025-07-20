import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sale } from './sale.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  baseUrl = 'http://localhost:8080/vendas';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  create(sale: Sale): Observable<Sale> {
    return this.http.post<Sale>(this.baseUrl, sale);
  }

  read(): Observable<Sale[]>{
    return this.http.get<Sale[]>(this.baseUrl);
  }

  readById(id: string): Observable<Sale>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Sale>(url);
  }
}
