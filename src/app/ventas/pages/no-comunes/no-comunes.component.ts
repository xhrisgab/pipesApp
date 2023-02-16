import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Dayana';
  genero: string = 'F';
  invitacionMap = {
    'M': 'invitarlo',
    'F': 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Fernando', 'Garcia'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un clinte esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  // KeyValue Pipe
  persona = {
    nombre: 'Christian',
    edad: 35,
    direccion: 'La Paz, Bolivia'
  };

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Acuaman',
      vuela: false,
    }
  ]

  cambiarCliente(){
    if (this.genero === 'F'){
      this.nombre = 'Gabo';
      this.genero = 'M';
    } else {
      this.nombre = 'Dayana';
      this.genero = 'F';
    }
  }


  borrarCliente(){
    this.clientes.pop();
  }

    //Async Pipe
    miObservable = interval(1000); //0,1,2,3,4,5,6...

    valorPromesa = new Promise( (resolve, reject) => {
      setTimeout(()=> {
        resolve('Datos de la promesa');
      }, 3500)
    } );
  
}
