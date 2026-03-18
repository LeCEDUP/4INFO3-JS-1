for (let i = 1; i <= 10; i++) console.log(i);

let p = 0;
while (p <= 20) { console.log(p); p += 2; }

let nomes = ["Ana", "Bia", "Caio"];
for (let n of nomes) console.log(n);

let pessoa = { nome: "Ana", idade: 25, cidade: "SP" };
for (let chave in pessoa) console.log(`${chave}: ${pessoa[chave]}`);
