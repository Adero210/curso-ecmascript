//Parametos por defecto
// Sin ECMAScript
function newFunction(name, age, country) {
    var name = name || 'luis';
    var age = age || 32;
    var country = country || 'México';
    console.log(name, age, country)
}

// Con ECMAScript es6 
function newFunction2(name = 'luis', age = 32, country = 'mx') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Angel', 23, 'Suiza');


let hello = "hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//Templates literals
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);