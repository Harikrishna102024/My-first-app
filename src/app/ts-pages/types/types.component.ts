import { Component } from '@angular/core';
import { TscriptService } from '../../services/tscript.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrl: './types.component.scss'
})
export class TypesComponent {

  typesNotes: any;

  constructor(public tsNotes: TscriptService) { }

  ngOnInit() {
    this.getTsNotes();
  }

  getTsNotes() {
    const typesData: any = this.tsNotes.notesList['tsTypes'];
    if(typesData && typesData.length > 0) {
      this.typesNotes = typesData;
    }
  }
}
