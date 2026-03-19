let num1 = 15;
let num2 = 5;

console.log("--- Operações Aritméticas ---");
console.log("Soma:", num1 + num2);        
console.log("Subtração:", num1 - num2);    
console.log("Multiplicação:", num1 * num2); 
console.log("Divisão:", num1 / num2);       

console.log("\n--- Comparações ---");
console.log("num1 é maior que num2?", num1 > num2); 
console.log("num1 é estritamente igual a num2?", num1 === num2); 

let nota = 85;

console.log("\n--- Classificação de Nota ---");
if (nota >= 90 && nota <= 100) {
    console.log("Classificação: A");
} else if (nota >= 80) {
    console.log("Classificação: B");
} else if (nota >= 70) {
    console.lnodeog("Classificação: C");
} else if (nota >= 60) {
    console.log("Classificação: D");
} else {
    console.log("Classificação: F");
}