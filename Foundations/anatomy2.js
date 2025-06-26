// Anonymous Function

(function (a, b, c) {
    return a + b + c;
})

// Function Expression
const sum = function (a, b, c) {
    return a + b + c;
}

sum(1, 2, 3); 
console.log(sum(1, 2, 3)); // Retorna 6

const result = sum(7, 11, 59)
console.log(result); // Retorna 77

const anotherSum = sum;
console.log(anotherSum(5, 9));

// Atribuindo à variávies

let x = 3
console.log(x); // Retorna 3

x = sum;
console.log(x); // Retorna a função sum
console.log(x(2, 3, 4)) // Retorna 9, pois x agora é uma referência à função sum