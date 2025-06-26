function exec(fn, a, b){
    return fn(a, b);
}

const somarNoTerminal = (x, y) => console.log(x + y);
const subtrairNoTerminal = (x, y) => console.log(x - y);
const multiplicarNoTerminal = (x, y) => console.log(x * y);

exec(somarNoTerminal, 10, 20); // Exibe a soma de 10 e 20
exec(subtrairNoTerminal, 10, 20); // Exibe a subtração de 10 e 20
exec(multiplicarNoTerminal, 10, 20); // Exibe a multiplicação de 10 e 20

const cb = () => console.log('Exec...')
setInterval(cb, 1000)

setInterval(function () {
    console.log('Executando a cada segundo...');
}, 1000);