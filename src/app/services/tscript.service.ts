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
      ex: ``
    },
    {
      q: 'Why do we use TypeScript ?',
      a: 'Typescript support the static typing. It support the types. It support all the js libraries.It is very usefull fro big projects',
      ex: ''
    },
    {
      q:`Differences between JavaScript and TypeScript ?`,
      a:`<JAVA SCRIPT>.
        JavaScript does not support Types.
        In javaScript error comes after run the project.
        We can directly run on the browser. 
        <TYPESCRIPT>.
        Typescript support Types.
        In TypeScript error comes while writing the code.
        We can't directly run on the browser.`,
      ex:``,
    },
  ],
  tsTypes: [
    {
      q: 'What is Data type ?',
      a: `Data type means, It is used to define the type of a variable is called Data Type.There are differenet types of data types. 
      <Primitive>.
      number.string.boolean.null.undefind.bigint.
      <Non-Primitive>.
      Array.tuple.function.object.
      <Special>.
      any.unknown.void.unin.enum.`,
      ex: `All the examples are mentioned bellow......`
    },
    {
      a:`<PRIMITIVE DATA TYPES>.<NUMBER>.number is a primitive datatype used to store the any kind of numarical values like number,float,decimal, etc.. `,
      ex:`const age: number = 20;~const age: number = 20.2;`
    },
    {
      a:`<STRING>.string is a primitive datatype used to store the text values. `,
      ex:`const name: string = 'harikrishna';`
    },
    {
      a:`<BOOLEAN>.boolean is a primitive datatype. It used to store any one value either 'true' or 'false'`,
      ex:`const status: boolean = true;~const status: boolean = false;`
    },
    {
      a:`<NULL>.null is a primitive datatype used to define the 'no-value;' or 'empty-value' or 'value is not available yet'`,
      ex:`const value: null = null;`
    },
    {
      a:`<UNDEFIND>.undefind is a primitive datatype. It means the variable is declared but value is not assigned.`,
      ex:`const value: undefind;`
    },
    {
      a:`<BIGINT>.bigint  is a primitive datatype. It is used to to strore the large integer values, and bigint follow the suffix 'n'.`,
      ex:`const value: bigint = 12345678901234567890n;`
    },
    {
      a:`<NON-PRIMITIVE DATA TYPES>.<ARRAY>. Array is a non-primitive data type. It is used to store the multiple values in a single variable.`,
      ex:`const arr: any[] = [1,2,3,4,5,6,7,8,9,10];~const arr: number = [1,2,3,4,5,6,7,8,9,10];~const arr: string[] = ['hari','krishna']`
    },
    {
      a:`<TUPLE>. Tuple is a non-primitive data type. It is used to store the multiple values in a single variable like array. But here fixed length, fixed positin, fixed type`,
      ex:`const arr: any[name: string, age: number] = ['hari',10];`
    },
    {
      a:`<FUNCTION (keyword)>. The function is a non primitive data type in typescript, becoze we can store one function in a variable.Function keyword is used to define a function`,
      ex:`const add = function() {
          console.log('this is function')
      }`
    },
    {
      a:`<OBJECT>. object is a non-primitive data type in typescript. It is used to store the group of values in the form of key value pairs. An object is a real world entity it has some state and behaviour.`,
      ex:`const data = {
        name: 'harikrishna;,
        age: 22
      }`
    },
    {
      a:``,
      ex:``
    },
    {
      a:``,
      ex:``
    },
    {
      a:``,
      ex:``
    },
  ]
};


  
}
