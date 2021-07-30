// Objetc.entries devuelve la clave y valores de una matriz
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.table(data);
console.table(entries);
console.log(entries.length);

//Objects values devuelve los valores de un objeto a un arreglo

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(data);
console.table(values);
console.log(values.length);

//padding 
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '---------'))

