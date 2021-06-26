import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title             = 'bytebank';
  transferenciasApp : any[] = [];

  // pegando os valores que foram passados para app.component.html pelo o evento de nova-transferencia.component.ts
  transferirApp($event: any){
    console.log($event);
    const transferencia = {...$event, data: new Date()};
    this.transferenciasApp.push(transferencia);
  }
}
