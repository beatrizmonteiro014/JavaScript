// Anonymous Function
// IIFE - Immediately Invoked Function Expression

(function (a, b, c) {
    console.log(`Result: ${a + b + c}`)
})(1, 2, 3);

(function (a, b, c) {
    let x = 3;
    console.log(`Result: ${a + b + c}`)
    console.log(x)
})(1, 2, 3); // Retorna 6 e 3

(function (a, b, c) {
    let x = 300;
    console.log(`Result: ${a + b + c}`)
    console.log(x)
})(1, 2, 3); // Retorna 6 e 300

console.log(x); // Retorna um erro, pois x não está definido fora da função