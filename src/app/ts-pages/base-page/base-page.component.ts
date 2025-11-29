import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrl: './base-page.component.scss'
})
export class BasePageComponent implements OnInit {

  @Input() data: any;
  prepareNotes: any;

  constructor(private sanitizer: DomSanitizer) { }


  ngOnInit() {
    this.prepareData();
  }

  prepareData() {
    if (this.data && this.data.length > 0) {

      this.prepareNotes = [];

      this.data.forEach((item: any) => {
        let newItem: any = {
          q: item.q,
          a: item.a,
          ex: item.ex,
        };
        newItem.processedAnswer = this.formatAnswer(item.a);
        newItem.processedExample = this.formatExample(item.ex);
        this.prepareNotes.push(newItem);
      });
    }
  }


  formatAnswer(text: string) {
    const lines = text
      .split('.')
      .map(l => l.trim())
      .filter(l => l);

    let html = '';

    lines.forEach(line => {
      const match = line.match(/<([^>]+)>/);

      if (match) {
        const heading = match[1].trim();
        html += `<div class="heading-line" style="font-family: cursive; color: black;font-size: 19px;"><b>${heading}</b></div>`;
      } else {
        html += `
        <div class="answer" style="display:flex; padding-left:13px;">
          <span>-</span>
          <span style ="padding-left:4px; font-family: cursive; color: black; font-size: 19px">${line}.</span>
        </div>
      `;
      }
    });

    return this.sanitizer.bypassSecurityTrustHtml(html);
  }


  formatExample(text: string) {

    let html = '';
    if (text) {
      const match = text.match(/<([^>]+)>/);

      if (match) {
        const heading = match[1].trim();
        html += `
        <div class="heading-line" style="font-family: cursive; color:black;font-size: 19px;"><b>${heading}</b></div>
        <pre style="font-size: 19px; font-family: cursive; padding-left: 50px;" >${text}</pre>`;
      } else {
        html += `<pre style="font-size: 19px; padding-left: 50px; font-family: cursive;">${text}</pre>`
      }
    } else {
      html += `<pre style="font-family: cursive; font-size: 19px; color:black;">No need example</pre>`
    }
    return this.sanitizer.bypassSecurityTrustHtml(html);

  }

}
