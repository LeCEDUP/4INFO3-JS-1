// 1. Declare uma variável nome usando let e atribua a ela o seu nome.
let nome = "Marlon Caetano Damasio";

// 2. Declare uma constante anoNascimento usando const e atribua a ela o seu ano de nascimento.
const anoNascimento = 1996;

// 3. Calcule sua idade e armazene-a em uma variável idade usando let.
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;

// 4. Declare uma variável isEstudante e atribua a ela um valor booleano (true ou false).
let isEstudante = true;

// 5. Imprima no console o valor e o tipo de cada uma dessas variáveis usando console.log() e o operador typeof.
console.log(`Nome: ${nome} (${typeof nome})`);
console.log(`Ano de Nascimento: ${anoNascimento} (${typeof anoNascimento})`);
console.log(`Idade: ${idade} (${typeof idade})`);
console.log(`É Estudante: ${isEstudante} (${typeof isEstudante})`);
