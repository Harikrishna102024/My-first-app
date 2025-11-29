import { Injectable } from '@angular/core';
import { NotesModel } from '../models/notesModel';

@Injectable({
  providedIn: 'root'
})
export class TscriptService {

  constructor() { }

  prepareTypeScriptNotes() {
    return this.notesList
  }

  notesList:{[key: string]: NotesModel[]} = {
  tsIntro: [
    {
      q: 'What is TypeScript ?',
      a: `TypeScript is pure object-oriented programming language and it is a strongly typed superscript of java script.
          TypeScript add the static typing.
          Typescript is not directly run on the browser it needs compiler to compile and generate JavaScript file then execute, becouse browser will not understand the TypeScript code.`,
      ex: 'Example…'
    },
    {
      q: 'Why do we use TypeScript ?',
      a: 'Typescript support the static typing. It support the types. It support all the js libraries.It is very usefull fro big projects',
      ex: 'Example…'
    },
    {
      q:`Differences between JavaScript and TypeScript ?`,
      a:`JAVA SCRIPT:-.
        JavaScript does not support Types.
        In javaScript error comes after run the project.
        We can directly run on the browser. 
        TYPESCRIPT:-.
        Typescript support Types.
        In TypeScript error comes while writing the code.
        We can't directly run on the browser`,
      ex:``,
    },
  ],
  tsTypes: [
    {
      q: 'What is Data type ?',
      a: `Data type means, It is used to define the type of a variable is called Data Type.There are differenet types of data types. 
      Primitive:-.
      number.string.boolean.null.undefind.bigint.
      Non-Primitive:-.
      Array.tuple.function.object.
      Special:-.
      any.unknown.void.unin.enum.
      number:-.number is primitive datatype used to store the any kind of numaric values`,
      ex: `number:- var age: number = 24;`
    }
  ]
};


  
}
