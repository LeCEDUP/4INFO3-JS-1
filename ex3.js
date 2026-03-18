
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


let j = 0;
while (j <= 20) {
  console.log(j);
  j += 2;
}


const nomes = ["Ana", "Bruno", "Carlos", "Daniela"];

for (const nome of nomes) {
  console.log(nome);
}


const pessoa = {
  nome: "Rafael",
  idade: 30,
  cidade: "Florianópolis"
};

for (const chave in pessoa) {
  console.log(chave + ": " + pessoa[chave]);
}


