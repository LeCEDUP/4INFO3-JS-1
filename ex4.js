function somar(a, b) {
    return a + b;
}

function saudacao(nome = "Visitante") {
    console.log(`Olá, ${nome}!`);
}

function ehPar(numero) {
    return numero % 2 === 0;
}

function aplicarOperacao(callback, num1, num2) {
    return callback(num1, num2);
}

console.log("\n--- Teste da Função somar ---");
console.log("Soma de 5 e 3: ", somar(5, 3));
console.log("Soma de 10 e -2: ", somar(10, -2));

console.log("\n--- Teste da Função saudacao ---");
saudacao("Alice");
saudacao();

console.log("\n--- Teste da Função ehPar ---");
console.log("É 4 par? ", ehPar(4));
console.log("É 7 par? ", ehPar(7));
console.log("É 0 par? ", ehPar(0));

console.log("\n--- Teste da Função aplicarOperacao ---");
const resultadoSoma = aplicarOperacao(somar, 10, 5);
console.log("Aplicar somar (10, 5): ", resultadoSoma);

function multiplicar(a, b) {
    return a * b;
}
const resultadoMultiplicacao = aplicarOperacao(multiplicar, 4, 6);
console.log("Aplicar multiplicar (4, 6): ", resultadoMultiplicacao);

function subtrair(a, b) {
    return a - b;
}
const resultadoSubtracao = aplicarOperacao(subtrair, 20, 7);
console.log("Aplicar subtrair (20, 7): ", resultadoSubtracao);
