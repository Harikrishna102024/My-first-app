import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrl: './base-page.component.scss'
})
export class BasePageComponent implements OnInit {

  @Input() data: any;

  prepareNotes: any;

  ngOnInit() {
    this.populateData();
  }

  populateData() {
    if(this.data && this.data.length > 0) {
      this.prepareNotes = this.data
    }
  }

}
