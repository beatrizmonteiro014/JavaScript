// Desafio 1
function range1 (a){
    const nums = [];
    for (let i = 1; i <= a; i++){
        nums.push(i);
    }
    return nums;
}
console.log(range1(5)); // Retorna [1, 2, 3, 4, 5]

// Desafio 2
function range2(a, b){
    const nums = [];
    for (let i = a; i <= b; i++){
        nums.push(i);
    }
    return nums;
}
console.log(range2(3, 7)); // Retorna [3, 4, 5, 6, 7]

// Desafio 3
function range3(a, b, c){
    const nums = [];
    for (let i = a; i <= b; i += c){
        nums.push(i);
    }
    return nums;
}
console.log(range3(1, 10, 2)); // Retorna [1, 3, 5, 7, 9]

// Desafio 4
function range4(a, b){
    const nums = [];
    for (let i = a; i >= b; i--){
        nums.push(i);
    }
    return nums;
}
console.log(range4(10, 5)); // Retorna [10, 9, 8, 7, 6, 5]

// Desafio 5
function range5(a, b, c){
    const nums = [];
    for (let i = a; i >= b; i -= c){
        nums.push(i);
    }
    return nums;
}
console.log(range5(10, 1, 2)); // Retorna [10, 8, 6, 4, 2]