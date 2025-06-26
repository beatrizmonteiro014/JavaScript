
function darBomDia(){
    console.log('Bom dia!');
}

const darBoaTarde = function (){
    console.log('Boa tarde!');
}

function executarQualquerCoisa(fn){
    if (typeof fn === 'function') {
        fn(); 
    } else {
        console.log('Erro: O argumento não é uma função.'); // Exibe mensagem de erro se não for uma função
    }
}

executarQualquerCoisa(darBomDia); // Executa a função darBomDia
executarQualquerCoisa(darBoaTarde); // Executa a função darBoaTarde
executarQualquerCoisa('teste'); // Exibe mensagem de erro, pois o argumento não é uma função

function potencia(base, expoente){
    return Math.pow(base, expoente);
}

const bits128 = potencia(2, 8); // Calcula 2 elevado a 8
console.log(bits128); // Exibe o resultado

function potenciav2(base){
    return function(expoente){
        return Math.pow(base, expoente); 
    }
}

const potenciaDe3 = potenciav2(3); // Cria uma função com base 3
console.log(potenciaDe3(8)); // Exibe 3 elevado a 8