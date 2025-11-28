import { Component } from '@angular/core';
import { SIDE_NAV } from '../side-nav';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  navItem: any = SIDE_NAV

  toggleMenu(item: any) {
    item.open = !item.open;
  }

}






