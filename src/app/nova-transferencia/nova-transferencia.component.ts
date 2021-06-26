import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector    : 'app-nova-transferencia',
  templateUrl : './nova-transferencia.component.html',
  styleUrls   : ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{
  //evento de enviar os valores do componente
  @Output() aoTransferir = new EventEmitter<any>();

  valor   : number | undefined;
  destino : number| undefined;

  //emitimos o valor
  transferir(){
    console.log('Solicitada nova transferencia');
    const valorEmitir = {valor: this.valor,destino: this.destino}
    this.aoTransferir.emit(valorEmitir)
    this.limparCampos();
  }

  limparCampos(){
    this.valor   = 0;
    this.destino = 0;
  }
}
