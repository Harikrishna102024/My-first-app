import { Component, Input } from '@angular/core';
import { AppContext } from '../../appContext';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input('selectedTitle') selectedTitle: any;

  constructor(public context: AppContext) { }

  toggleTheme(event: any) {
    const isChecked = event.target.checked;
    if (isChecked) {
      this.context.theme = 'dark';
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      this.context.theme = 'light';
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
    console.log(this.context.theme)
  }


}
