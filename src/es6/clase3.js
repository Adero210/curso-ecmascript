let nombre = 'Luis';
let age = 22;
//es5
obj = {
    nombre: nombre,
    age: age
};
//es6
obj2 = { nombre, age };

console.log(obj2);

// arrow functions 

const names = [
    { name: 'Luis', age: 22 },
    {name: 'Saiya', age:18}
]
//funcion anonima
let listOfNames = names.map(function (item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));
const listNames = (name, age, country) => {
    //...
}
const listNames2 = name => {
    //...
}

const square = num => num * num;

// Promesas 

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false)
        {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));