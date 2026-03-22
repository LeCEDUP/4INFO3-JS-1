let cores = ["Verde", "Branco", "Preto"];
console.log("Array original de cores:", cores);

cores.push("Vermelho");
console.log("Array após adicionar \'Vermelho\':", cores);

cores.shift();
console.log("Array após remover a primeira cor:", cores);

console.log("Array resultante de cores:", cores);

let livro = {
    titulo: "50 Tons de Cinza",
    autor: "E. L. James",
    anoPublicacao: 2011
};
console.log("\nObjeto livro original:", livro);

livro.genero = "Romance";
console.log("Objeto livro após adicionar \'genero\':", livro);

console.log("Título do livro:", livro.titulo);
console.log("Autor do livro:", livro.autor);

console.log("Chaves do objeto livro:", Object.keys(livro));
console.log("Valores do objeto livro:", Object.values(livro));
