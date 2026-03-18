// 1. Função somar que retorna a soma de dois números.
function somar(a, b) {
  return a + b;
}

// 2. Função saudacao com parâmetro padrão.
function saudacao(nome = "Visitante") {
  console.log(`Olá, ${nome}!`);
}

// 3. Função ehPar que retorna um booleano (true/false).
function ehPar(numero) {
  return numero % 2 === 0;
}

// 4. Função de alta ordem aplicarOperacao (recebe um callback).
function aplicarOperacao(callback, num1, num2) {
  return callback(num1, num2);
}

// Testando a função de alta ordem com diferentes operações:
const resultadoSoma = aplicarOperacao(somar, 10, 5); // 15
const multiplicar = (a, b) => a * b; // Exemplo de arrow function
const resultadoMultiplicacao = aplicarOperacao(multiplicar, 10, 5); // 50

console.log(`Soma: ${resultadoSoma}, Multiplicação: ${resultadoMultiplicacao}`);
