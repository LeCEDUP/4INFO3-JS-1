
let num1 = 20;
let num2 = 7;


console.log("=== Operações Aritméticas ===");
console.log("num1 + num2 =", num1 + num2);
console.log("num1 - num2 =", num1 - num2);
console.log("num1 * num2 =", num1 * num2);
console.log("num1 / num2 =", num1 / num2);

console.log("\n=== Comparações ===");

console.log("num1 > num2?", num1 > num2);


console.log("num1 === num2?", num1 === num2);

console.log("\n=== Classificação da Nota ===");

let nota = 85;


if (nota >= 90 && nota <= 100) {
    console.log("Classificação: A");
} else if (nota >= 80 && nota <= 89) {
    console.log("Classificação: B");
} else if (nota >= 70 && nota <= 79) {
    console.log("Classificação: C");
} else if (nota >= 60 && nota <= 69) {
    console.log("Classificação: D");
} else {
    console.log("Classificação: F");
    
}
