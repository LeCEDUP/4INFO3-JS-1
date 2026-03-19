let NomeGato = "Prince";

const AnoNascimentoGato = 2010;

let AnoAtual = new Date().getFullYear();
let IdadeGato = AnoAtual - AnoNascimentoGato;

let eCastrado = true;

console.log(`Nome do Gato: ${NomeGato} (${typeof NomeGato})`);
console.log(`Ano de Nascimento: ${AnoNascimentoGato} (${typeof AnoNascimentoGato})`);
console.log(`Idade do Gato: ${IdadeGato} (${typeof IdadeGato})`);
console.log(`É Castrado: ${eCastrado} (${typeof eCastrado})`);

