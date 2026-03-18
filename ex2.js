// 1. Crie duas variáveis num1 e num2 com valores numéricos de sua escolha.
let num1 = 20;
let num2 = 10;

// 2. Realize as quatro operações aritméticas básicas (+, -, *, /) e imprima os resultados.
console.log(`Soma: ${num1 + num2}`);           // 30
console.log(`Subtração: ${num1 - num2}`);      // 10
console.log(`Multiplicação: ${num1 * num2}`);  // 200
console.log(`Divisão: ${num1 / num2}`);        // 2

// 3. Verifique se num1 é maior que num2 e imprima o resultado.
console.log(`num1 é maior que num2? ${num1 > num2}`); // true

// 4. Verifique se num1 é igual num2 usando o operador de igualdade estrita (===) e imprima o resultado.
console.log(`num1 é estritamente igual a num2? ${num1 === num2}`); // false

// 5. Crie uma variável nota e atribua a ela um valor entre 0 e 100.
let nota = 75;

// 6. Usando if/else if/else, imprima a classificação da nota:
if (nota >= 90 && nota <= 100) {
  console.log(`Classificação: A`);
} else if (nota >= 80 && nota <= 89) {
  console.log(`Classificação: B`);
} else if (nota >= 70 && nota <= 79) {
  console.log(`Classificação: C`);
} else if (nota >= 60 && nota <= 69) {
  console.log(`Classificação: D`);
} else {
  console.log(`Classificação: F`);
}
