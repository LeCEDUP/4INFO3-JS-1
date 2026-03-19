console.log("--- Exercício: Arrays ---");
let cores = ["Azul", "Verde", "Vermelho"];

cores.push("Amarelo");

cores.shift();

console.log("Cores resultantes:", cores); 


console.log("\n--- Exercício: Objetos ---");
let livro = {
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1937
};

livro.genero = "Fantasia";

console.log("Título:", livro.titulo);
console.log("Autor:", livro.autor);

console.log("\nChaves do objeto:", Object.keys(livro));
console.log("Valores do objeto:", Object.values(livro));