
console.log("--- Loop For: 1 a 10 ---");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


console.log("\n--- Loop While: Pares de 0 a 20 ---");
let contador = 0;
while (contador <= 20) {
    console.log(contador);
    contador += 2; 
}

console.log("\n--- Loop For...of: Array de Nomes ---");
const nomes = ["Alice", "Bruno", "Carla", "Diego"];

for (let nome of nomes) {
    console.log("Nome:", nome);
}

console.log("\n--- Loop For...in: Propriedades do Objeto ---");
const usuario = {
    nome: "Arthur",
    idade: 28,
    cidade: "Joinville"
};

for (let chave in usuario) {
    console.log(chave + ": " + usuario[chave]);
}