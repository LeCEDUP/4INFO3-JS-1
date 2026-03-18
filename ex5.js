let cores = ["Azul", "Verde", "Vermelho"];
cores.push("Amarelo");
cores.shift();
console.log(cores);

let livro = { titulo: "Dom Casmurro", autor: "Machado de Assis", anoPublicacao: 1899 };
livro.genero = "Romance";
console.log(Object.keys(livro), Object.values(livro));
