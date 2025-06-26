
function somar(a){
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    };
}

// Exemplo de uso

const somarAB = somar(10)(20);
console.log(somarAB(3));  // 33
console.log(somar(10)(20)(30)); // 60


// Aqui nós estamos criando duas funções básicas
function subtrair(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

// E aqui nós temos a função 'calcular'
// Ela recebe não ssó os argumentos para fazer o cálculo, mas também o argumento que determina a ação (somar, subtrair ou multiplicar).
function calcular(fn){
    return function(x){
        return function(y){
            return fn(x, y);
        }
    };
}

console.log(calcular(subtrair)(10)(5)); // 5
console.log(calcular(multiplicar)(10)(5)); // 50