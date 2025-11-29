import { Component, OnInit } from '@angular/core';
import { TscriptService } from '../../services/tscript.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit {

  introNotes: any;

  constructor(public tsNotes: TscriptService){}

  ngOnInit() {
    this.getTsNotes();
  }

  getTsNotes() {
    const intoData = this.tsNotes.notesList['tsIntro'];
    if(intoData && intoData.length > 0) {
      this.introNotes = intoData;
    }
  }


}
