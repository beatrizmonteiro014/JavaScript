const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.45 },
  { nome: 'Lápis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.2 },
];

const getTotal = (item) => item.qtde * item.preco;
const somar = (acc, el) => {
    console.log(acc, el)
    return acc + el;
}

const totais = carrinho.map(getTotal);
console.log(totais);

const totalGeral = totais.reduce(somar, 0);
console.log(totalGeral);

const somar2 = (acc, el) => acc + el;

const totalFinal = carrinho
    .map(getTotal)
    .reduce(somar2, 0);
console.log(totalFinal);

Array.prototype.meuReduce = function (fn, valorInicial) {
    let acc = valorInicial
    for (let i = 0; i < this.length; i++) {
        if(!acc && i === 0) {
            acc = this[i];
        } else {
            acc = fn(acc, this[i], i, this);
        }
    }
    return acc;
}

const totalFinal2 = carrinho
    .map(getTotal)
    .meuReduce(somar2);
console.log(totalFinal2);