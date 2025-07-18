import { HttpClient } from "@angular/common/http"; 
import { Injectable } from "@angular/core"; 
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs"; 
import { Client } from './client.model'; 

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = "http://localhost:8080/clientes"

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
        this.snackbar.open(msg, 'X', {
            duration: 3000, // Duração da mensagem em milissegundos
            horizontalPosition: "right", // Posição horizontal
            verticalPosition: "top" // Posição vertical
        });
    }

    create(client: Client): Observable<Client> {
      return this.http.post<Client>(this.baseUrl, client);
    }

    read(): Observable<Client[]>{
      return this.http.get<Client[]>(this.baseUrl);
    }

    readById(id: string): Observable<Client> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.get<Client>(url);
    }

    update(client: Client): Observable<Client>{
      const url = `${this.baseUrl}/${client.cliId}`;
      return this.http.put<Client>(url, client);
    }

    delete(id: number): Observable<void>{
      const url = `${this.baseUrl}/${id}`;
      return this.http.delete<void>(url);
    }
}
