import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  //recebendo os valores do $event do app.component.ts
 @Input() transferenciaExtrato: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
