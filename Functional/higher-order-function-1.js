// Funções de ordem superior
function run(fn){
    fn()
}

function sayHello(){
    console.log("Hello!");
}
run(sayHello);

// // Nós também podemos passar funções já existentes no JavaScript
// const result = run(Math.random);
// console.log(result)