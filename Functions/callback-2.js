const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

function exibeConteudo(err, conteudo) {
    console.log(conteudo.toString());
}

fs.readFile(caminho, exibeConteudo);
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()));