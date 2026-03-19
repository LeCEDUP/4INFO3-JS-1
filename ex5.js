
let cores = ["rosa", "azul", "amarelo"];
console.log("Array original:", cores);


cores.push("verde");
console.log("Após push:", cores);


cores.shift();
console.log("Após shift:", cores);


console.log("Array resultante:", cores);


let livro = {
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  anoPublicacao: 1899
};

console.log("Livro original:", livro);


livro.genero = "Romance";


console.log("Título:", livro.titulo);
console.log("Autor:", livro.autor);


console.log("Chaves:", Object.keys(livro));
console.log("Valores:", Object.values(livro));

