const students = [
    { name: 'Bia', score: 6.4},
    { name: 'Ana', score: 8.5},
    { name: 'João', score: 7.3},
    { name: 'Júlia', score: 9.2},
    { name: 'John', score: 5.8},
    { name: 'Keite', score: 8.0}    
];

const greatStudent = student => student.score >= 8;
const getScore = el => el.score;
const avg = (acc, el, i, array) => {
    if (i === array.length - 1) {
        return (acc + el) / array.length;
    } else {
        return acc + el;
    }
}

console.log(
    students
        .filter(greatStudent) // Filtra os alunos com nota maior ou igual a 8
        .map(getScore) // Mapeia para obter as notas dos alunos filtrados
        .reduce(avg) // Calcula a média das notas
); // 8.5