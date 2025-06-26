function logParams(a, b, c){
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
}

logParams(1, 2, 3); // Retorna a: 1, b: 2, c: 3
logParams(1, 2); // Retorna a: 1, b: 2, c: undefined
logParams(1, 2, 3, 4); // Retorna a: 1, b: 2, c: 3 (o quarto parâmetro é ignorado)

// Default Parameters

function defaultParams(a = 1, b = 2, c = 3) {
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
}

defaultParams(); // Retorna a: 1, b: 2, c: 3
defaultParams(7, 8); // Retorna a: 7, b: 8, c: 3


function logNums (...nums) {
    console.log(Array.isArray(nums)); // Retorna true, pois nums é um array
    for(let n of nums){
        console.log(n);
    }
}

logNums(1, 2, 3, 5, 7, 11);

function sumAll(...nums){
    let total = 0;
    for(let n of nums){
        total += n;
    }
    return total;
}

console.log(sumAll(1, 2, 3, 4, 5)); // Retorna 15