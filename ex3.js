// 1. Use um loop for para imprimir os números de 1 a 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Use um loop while para imprimir os números pares de 0 a 20.
let j = 0;
while (j <= 20) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
}

// 3. Crie um conjunto de nomes. Use um loop for...of para imprimir cada nome no console.
const nomes = ["Alice", "Carlos", "Beatriz", "Daniel"];
for (const nome of nomes) {
  console.log(nome);
}

// 4. Crie um objeto com algumas propriedades (nome, idade, cidade). 
// Use um loop for...in para imprimir cada chave e seu valor correspondente.
const pessoa = {
  nome: "Maria",
  idade: 30,
  cidade: "São Paulo"
};

for (const chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}
