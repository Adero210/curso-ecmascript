//Clase 7
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 5000)
            : reject(new Error('Test error'));
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
     //const hello2 = await ...
    console.log(hello);
}

//helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch(error) {
        console.error(error);
    }
}

anotherFunction();
console.log('Hola');