function somar(a, b) {
    return a + b;
}
console.log("Resultado da Soma:", somar(10, 5)); // 15

function saudacao(nome = "Visitante") {
    console.log("Olá, " + nome + "!");
}
saudacao("Arthur"); 
saudacao();         

function ehPar(numero) {
    return numero % 2 === 0;
}
console.log("O número 8 é par?", ehPar(8)); 
console.log("O número 7 é par?", ehPar(7)); 

function aplicarOperacao(callback, num1, num2) {
    return callback(num1, num2);
}

const resultadoOperacao = aplicarOperacao(somar, 20, 30);
console.log("Resultado da Operação (Soma via Callback):", resultadoOperacao); 