const numbers1 = [1, 2, 3, 4, 5, 6];

const greaterThanTwo = el => el > 2;
const even = el => el % 2 === 0;

console.log(numbers1.filter(el => el >0));
console.log(numbers1.filter(greaterThanTwo));
console.log(numbers1.filter(even));

const students = [
    { name: 'Jake', score: 6.4},
    { name: 'Ana', score: 8.5},
    { name: 'Pedro', score: 7.3},
    { name: 'Maria', score: 9.2},
    { name: 'John', score: 5.8},
    { name: 'Alice', score: 8.0}    
];

// Filtrando alunos com nota maior ou igual a 8
const greatStudent = student => student.score >= 8;
console.log(students, students.filter(greatStudent));