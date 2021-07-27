// Before es6
let lorem = "Por honor y gloria Programare \n"
    + "hasta el final";
// after as6 
let lorem2 = `Otra frase quese me ocurre
    ya que seguimos trabajando en eso`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'Luis',
    'age': 23,
    'country': 'Mx'
}
console.log(person.name, person.age);
//Destructuracion de elementos 
let { username, age } = person;
console.log(username, age);

//Propagacion 
let team1 = ['Oscar', 'Julio', 'Ricardo'];
let team2 = ['Valeria', 'Jesica', 'Camila'];

let education = ['David', ...team1, 'Carlos', ...team2];
console.log(education);

let persona = {
    nombre: 'Luis',
    edad: 23
}

let persona2 = {
    ...persona,
    nombre: 'Saiya',
    constelacion: 'Pegaso'
}

console.log(persona);
console.log(persona2);

// let vs var 

{
    var globalVar = "Global var";
}

{
    let globalLet = "Global let";
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';
a = 'a';
console.log(a);