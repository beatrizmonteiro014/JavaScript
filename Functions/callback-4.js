const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.45 },
  { nome: 'Lápis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.2 },
];

const getNome = (item) => item.nome; // Pega no nome do item
const qtdeMaiorQueZero = (item) => item.qtde > 0; // Verifica se a quantidade do item é maior que zero
const qtdMeuitoGrande = (item) => item.qtde >= 10; // Verifica se a quantidade do item é maior ou igual a 10

const itensValidos = carrinho.filter(qtdeMaiorQueZero) // Filtra os itens com quantidade maior que zero
console.log(itensValidos);

const nomeItensValidos =  carrinho
    .filter(qtdeMaiorQueZero)
    .map(getNome);
console.log(nomeItensValidos);

Array.prototype.meuFilter = function (fn) {
  const novoArray = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      novoArray.push(this[i]);
    }
  }
  return novoArray;
}

const nomeItensValidos2 = carrinho
    .meuFilter(qtdeMaiorQueZero)
    .map(getNome);
console.log(nomeItensValidos2);