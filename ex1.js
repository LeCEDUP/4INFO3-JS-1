let meuprimo = "Henrique";

const anonascimento = 2008;

let anoatual = new Date().getFullYear();
let idade = anoatual - anonascimento;

let tavivo = true;

console.log(`Nome do meu primo: ${meuprimo} (${typeof meuprimo})`);
console.log(`Ano do nascimento: ${anonascimento} (${typeof anonascimento})`);
console.log(`Idade do meu primo: ${idade} (${typeof idade})`);
console.log(`É Vivo: ${tavivo} (${typeof tavivo})`);
