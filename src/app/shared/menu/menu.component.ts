import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            url: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            url: '/numeros'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            url: '/no-comunes'
          }]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        url: '/ordenar'
      }
    ];
  }

}