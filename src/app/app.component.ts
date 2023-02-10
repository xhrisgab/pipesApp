import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Christian CccCc';
  numero: number = 1000;

  getNombre(){
    console.log(this.nombre);
  }
}
