import { Component, OnInit } from '@angular/core';
import { TscriptService } from '../../services/tscript.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit {

  tsIntroNotes: any;

  constructor(public tsNotes: TscriptService){}

  ngOnInit() {
    this.getTsNotes();
  }

  getTsNotes() {
    if(this.tsNotes.notesList['tsIntro']) {
      this.tsIntroNotes = this.tsNotes.notesList['tsIntro']
    }
  }


}
