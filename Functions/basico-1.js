// Declaraçao de Variável
let a = 4
console.log(a);

// Declaração de Função
function bomDia() {
    console.log("Bom dia!");
}

bomDia();

// Function Expression
const boaTarde = function() {
    console.log("Boa tarde!");
}

boaTarde();

function somar(a, b){
    return a + b;
}

let result = somar(3, 4)
console.log(result);

result = somar (10,20,30, 40, 50)
console.log(result); 

result = somar(10) 
console.log(result); 