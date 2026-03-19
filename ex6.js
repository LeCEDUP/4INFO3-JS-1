const titulo = document.getElementById("titulo-dom");
titulo.textContent = "DOM Manipulado!";

// 2. Selecionar o parágrafo pela classe e adicionar a classe CSS "destaque"
const paragrafo = document.querySelector(".texto-paragrafo");
paragrafo.classList.add("destaque");

// 3. Adicionar evento de clique ao botão
const botao = document.getElementById("botao-mudar-texto");

botao.addEventListener("click", function() {
    paragrafo.textContent = "Texto alterado pelo clique!";
});

// 4. Criar e adicionar um novo elemento
const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este é um novo parágrafo criado via JS!";

const container = document.getElementById("container-novo-elemento");
container.appendChild(novoParagrafo);