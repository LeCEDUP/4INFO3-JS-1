// --- Manipulação de Arrays ---

// 1. Crie um array chamado cores com pelo menos 3 cores.
let cores = ["vermelho", "azul", "verde"];

// 2. Adicione uma nova cor ao final do array.
cores.push("amarelo");

// 3. Remova a primeira cor do array.
cores.shift();

// 4. Imprima o array resultante.
console.log("Cores resultantes:", cores); // Esperado: ["azul", "verde", "amarelo"]


// --- Manipulação de Objetos ---

// 1. Crie um objeto livro com as propriedades titulo, autor e anoPublicacao.
let livro = {
  titulo: "O Pequeno Príncipe",
  autor: "Antoine de Saint-Exupéry",
  anoPublicacao: 1943
};

// 2. Adicione uma nova propriedade genero ao objeto livro.
livro.genero = "Fábula";

// 3. Imprima o titulo e o autor do livro.
console.log(`Livro: ${livro.titulo}, Autor: ${livro.autor}`);

// 4. Use Object.keys() e Object.values() para imprimir chaves e valores.
console.log("Chaves do objeto:", Object.keys(livro));
console.log("Valores do objeto:", Object.values(livro));
