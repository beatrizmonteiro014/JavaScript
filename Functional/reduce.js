const numbers1 = [1, 2, 3, 4, 5, 6];

const sum = (total, el) => total + el;
const total = numbers1.reduce(sum, 100);
console.log(total);

// Calcular a média
const avg = (acc, el, i, array) => {
    if (i === array.length - 1) {
        return (acc + el) / array.length;
    } else {
        return acc + el;
    }
}

const result = numbers1.reduce(avg);
console.log(result); 