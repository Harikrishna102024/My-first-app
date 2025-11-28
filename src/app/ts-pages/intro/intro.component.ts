import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {

  notesList = [
    {
      q: "What is TypeScript?",
      a: "TypeScript is a superset of JavaScript that adds static typing and improves developer productivity.",
      example: `let age: number = 25;`
    },
    {
      q: "Why do we use TypeScript?",
      a: "It catches errors early, improves maintainability, and gives better coding experience.",
      example: `function add(a: number, b: number) { return a + b; }`
    }
  ];
}
