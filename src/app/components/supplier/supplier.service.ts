import { HttpClient } from "@angular/common/http"; 
import { Injectable } from "@angular/core"; 
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs"; 
import { Supplier } from './supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  baseUrl = "http://localhost:8080/fornecedores"

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000, // Duração da mensagem em milissegundos
      horizontalPosition: "right", // Posição horizontal
      verticalPosition: "top" // Posição vertical
    });
  }

  create(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.baseUrl, supplier);
  }

  read(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.baseUrl);
  }

  readById(id: string): Observable<Supplier> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Supplier>(url);
  }

  update(supplier: Supplier): Observable<Supplier> {
    const url = `${this.baseUrl}/${supplier.forId}`;
    return this.http.put<Supplier>(url, supplier);
  }

  delete(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}