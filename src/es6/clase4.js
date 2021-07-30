// Clases es6

class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(a, b) {
        this.valueA = a;
        this.valueB = b;
        return this.valueA + this.valueB;
    }

}

const cal = new Calculator();
console.log(cal.sum(3, 4));
//importar modulos
import hola from "./exampleModule.js";
const pr = document.getElementById("res");

let hello = hola();
console.log(hello);
pr.innerHTML = hello;

//otra manera de exportar e importar 
// const hello = () => { return 'hello!' } export { hello };

// Importé así:
// import { hello } from './module.js';

//Generators 
function* helloWorld() {
    if (true)
    {
        yield 'Hello, '
    }
    if (true)
    {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);