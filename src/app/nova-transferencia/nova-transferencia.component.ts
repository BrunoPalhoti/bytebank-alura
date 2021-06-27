import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransfereciaService } from '../services/transferecia.service';

@Component({
  selector    : 'app-nova-transferencia',
  templateUrl : './nova-transferencia.component.html',
  styleUrls   : ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{
  //evento de enviar os valores do componente
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransfereciaService, private router: Router){

  }

  //emitimos o valor
  transferir(){
    console.log('Solicitada nova transferencia');
    const valorEmitir: Transferencia = { valor: this.valor,destino: this.destino }
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    error => console.error(error)
    );
  }

  limparCampos(){
    this.valor   = 0;
    this.destino = 0;
  }
}
