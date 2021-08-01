//.flat (funciona en los navegadores)
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));
//flat map 
let arrayMap = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value, value * 2]));

// trim 
let hello = '             hello world          ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());
console.log(hello.trim());

try {
    
} catch {
    error;
}

// de arreglos a objetos 
let entries =  [["name", "luis"], ["age", 22]];

console.log(Object.fromEntries(entries));

let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);