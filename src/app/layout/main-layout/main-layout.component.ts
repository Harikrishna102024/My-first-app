import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

  selectedTitle: any;

  constructor(){}

  getName(value: any) {
   this.selectedTitle = value
  }
}
