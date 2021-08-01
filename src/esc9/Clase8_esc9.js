//Operador de reposo 
const obj = {
    name: 'Luis',
    age: 22,
    country: 'Mx',
}

let { country, ...all } = obj;
console.log(all)

const obje = {
    name: 'luis',
    age: 32
}
const obje1 = {
    ...obje,
    country: 'Mex'
}

console.log(obje1)

// Promise.finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(()=>resolve('Hello world'), 5000)
            : reject(new Error('tEST eRROR'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'));

console.log("Cya de groum")

// regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
console.log(match);
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);