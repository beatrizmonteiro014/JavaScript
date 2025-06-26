function finalPrice(tax, price){
    return price + (1 * tax);
}

console.log(finalPrice(0.2, 100)); // 100.2
console.log(finalPrice(0.0875, 21.7)); // 21.7

function finalPrice2(tax){
    return function(price){
        return price * (1 - tax);
    }
}

console.log(finalPrice2(0.2)(100)); // 100.2

// Exemplo de utiização

const nycFinalPrice = finalPrice2(0.0875);
console.log(nycFinalPrice(21.7)); // 21.7