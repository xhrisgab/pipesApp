import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower: string = 'christian';
  nombreUpper: string = 'CHRISTIAN';
  nombreCompleto: string = 'chrIstIAn cuEvAS';

  fecha: Date = new Date(); // el dia de hoy
  

}
