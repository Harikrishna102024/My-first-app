import { Component, EventEmitter, Output } from '@angular/core';
import { SIDE_NAV } from '../side-nav';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  navItem: any = SIDE_NAV

  @Output() sendData = new EventEmitter<string>();

  seletedName: any;

  constructor(){}

  toggleMenu(item: any) {
    item.open = !item.open;
  }

  passName(data: any) {
    this.seletedName = data;
    this.sendData.emit(data)
  }

}






