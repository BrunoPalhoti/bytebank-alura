import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//chamar a instacia da classe atraves do construtor
export class TransfereciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
   }

   get transferencias(){
     return this.listaTransferencia;
   }

   todas(): Observable<Transferencia[]>{
     return this.httpClient.get<Transferencia[]>(this.url);
   }

   adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this.hidratar(transferencia);

    return this.httpClient.post<Transferencia>(this.url,transferencia)
   }

   // regra do negocio
   private hidratar(transferencia: any){
    transferencia.data =  new Date();
   }
}
