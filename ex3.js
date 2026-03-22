for (let i = 1; i <= 10; i++) console.log(i);

let p = 0;
while (p <= 20) { console.log(p); p += 2; }

let nomes = ["Everton", "Henrique", "Victor"];
for (let n of nomes) console.log(n);

let pessoa = { nome: "Everton", idade: 67, cidade: "Curitiba" };
for (let chave in pessoa) console.log(`${chave}: ${pessoa[chave]}`);