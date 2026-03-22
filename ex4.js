function somar(a, b) {
    return a + b;
}

function saudacao(nome = "Estranho") {
    console.log(`Olá, ${nome}!`);
}

function ehPar(numero) {
    return numero % 2 === 0;
}

function aplicarOperacao(callback, num1, num2) {
    return callback(num1, num2);
}

console.log("\n--- Teste da Função somar ---");
console.log("Soma de 30 e 20: ", somar(30, 20));
console.log("Soma de 40 e 50: ", somar(40, 50));

console.log("\n--- Teste da Função saudacao ---");
saudacao("Suzane");
saudacao();

console.log("\n--- Teste da Função ehPar ---");
console.log("É 8 par? ", ehPar(8));
console.log("É 13 par? ", ehPar(13));
console.log("É 2 par? ", ehPar(2));

console.log("\n--- Teste da Função aplicarOperacao ---");
const resultadoSoma = aplicarOperacao(somar, 45, 55);
console.log("Aplicar somar (45, 55): ", resultadoSoma);

function multiplicar(a, b) {
    return a * b;
}
const resultadoMultiplicacao = aplicarOperacao(multiplicar, 30, 70);
console.log("Aplicar multiplicar (30, 70): ", resultadoMultiplicacao);

function subtrair(a, b) {
    return a - b;
}
const resultadoSubtracao = aplicarOperacao(subtrair, 80, 70);
console.log("Aplicar subtrair (80, 70): ", resultadoSubtracao);