import { Component } from '@angular/core';
import { TransfereciaService } from './services/transferecia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title             = 'bytebank';

  constructor(private service: TransfereciaService){
  }
}
