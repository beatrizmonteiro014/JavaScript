// Function Declaration



function sayHello() {
  console.log('Hello!');
}

sayHello()
console.log(sayHello()); 
let teste = sayHello();
console.log(teste); 


function sayHelloTo(name) {
  console.log(`Hello ${name}!`)
}

sayHelloTo('Monteiro');
console.log(sayHelloTo('Monteiro')); 
let teste2 = sayHelloTo('Monteiro');
console.log(teste2); 


function returnHiTo(name) {
    return `Hi ${name}!`;
}

console.log(returnHiTo('Monteiro')); // Retorna 'Hi Monteiro  !'