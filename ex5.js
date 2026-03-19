let cores = ["Roxo", "Rosa", "Branco"];
console.log("Array original de cores:", cores);

cores.push("Preto");
console.log("Array após adicionar \'Preto\':", cores);

cores.shift();
console.log("Array após remover a primeira cor:", cores);

console.log("Array resultante de cores:", cores);

let livro = {
    titulo: "One Piece",
    autor: "Eiichiro Oda",
    anoPublicacao: 1997
};
console.log("\nObjeto livro original:", livro);

livro.genero = "Shounen";
console.log("Objeto livro após adicionar \'genero\':", livro);

console.log("Título do livro:", livro.titulo);
console.log("Autor do livro:", livro.autor);

console.log("Chaves do objeto livro:", Object.keys(livro));
console.log("Valores do objeto livro:", Object.values(livro));

