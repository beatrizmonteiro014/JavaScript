
const numbers1 = [1, 2, 3, 4, 5, 6];

const numbersDouble = numbers1.map(el => el * 2); // Maneira mais simples

// for (let n of numbers1) {
//     numbersDouble.push(n * 2); // Maneira mais tradicional
// }

console.log(numbersDouble); // [2, 4, 6, 8, 10, 12]

const students = [
    { name: 'Bia', score: 6.4},
    { name: 'Ana', score: 8.5},
    { name: 'João', score: 7.3},
    { name: 'Júlia', score: 9.2},
    { name: 'John', score: 5.8},
    { name: 'Keite', score: 8.0}    
]

const getScore = el => el.score;
console.log(students.map(getScore));

const result = students.map(getScore).map(Math.ceil); // Arredondando os valores

console.log(students, result);