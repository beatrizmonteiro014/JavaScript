const felizNatal = () => console.log('Feliz Natal!')
felizNatal(); // Chama a função felizNatal para exibir a mensagem de Natal

const saudacao = (nome) => 'Eae ' + nome + ', tudo bem?';
console.log(saudacao('Jhonny')); // Exibe a saudação personalizada

const saudacao2 = (nome) => `Eae ${nome}, tudo bem?`;
console.log(saudacao2('Jhonny')); // Exibe a saudação personalizada

const somar = numeros => {
    let total = 0;
    for (let n of numeros){
        total += n; // Soma todos os elementos do array
    }
    return total;
}

console.log(somar([1, 2, 3, 4, 5]));
console.log(somar([10, 20, 30, 40, 50]));
console.log(somar([100, 200, 300, 400, 500]));

// Função com a sintaxe enxugada
const potencia = base => expoente => Math.pow(base, expoente);
console.log(potencia(2)(8));

Array.prototype.ultimo = function() {
    console.log(this); // Exibe o array no console
}

const numeros =  [1, 2, 3];
numeros.ultimo()
numeros.push(4); // Adiciona o número 4 ao array