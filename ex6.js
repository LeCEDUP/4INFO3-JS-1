// 1. Selecione o elemento h1 pelo seu ID e mude seu textContent para "DOM Manipulado!".
const titulo = document.getElementById('titulo-dom');
titulo.textContent = "DOM Manipulado!";
// 2. Selecione o parágrafo pela sua classe e adicione a classe CSS "destaque" a ele.
const paragrafo = document.querySelector('.texto-paragrafo');
paragrafo.classList.add('destaque');
// 3. Selecione o botão pelo seu ID. Adicione um event listener de 'click' a ele.
const botao = document.getElementById('botao-mudar-texto');
botao.addEventListener('click', () => {
    paragrafo.textContent = "Texto alterado pelo clique!";
});
// Quando o botão for clicado, mude o textContent do parágrafo para "Texto alterado pelo clique!".

// 4. Crie um novo elemento <p> com o textContent "Este é um novo parágrafo criado via JS!".
// Adicione este novo parágrafo ao elemento <div> com o ID "container-novo-elemento"
const novoParagrafo = document.createElement('p');
novoParagrafo.textContent = "Este é um novo parágrafo criado via JS!";
const container = document.getElementById('container-novo-elemento');
container.appendChild(novoParagrafo);