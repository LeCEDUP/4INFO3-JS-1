// 1. Selecione o elemento h1 pelo seu ID e mude seu textContent para "DOM Manipulado!".
const tituloDOM = document.getElementById('titulo-dom');
tituloDOM.textContent = 'DOM Manipulado!';

// 2. Selecione o parágrafo pela sua classe e adicione a classe CSS "destaque" a ele.
const paragrafo = document.querySelector('.texto-paragrafo');
paragrafo.classList.add('destaque');

// 3. Selecione o botão pelo seu ID. Adicione um event listener de 'click' a ele.

// Quando o botão for clicado, mude o textContent do parágrafo para "Texto alterado pelo clique!".
const botao = document.getElementById('botao-mudar-texto');
botao.addEventListener('click', function() {
    paragrafo.textContent = 'Texto alterado pelo clique!';
});

// 4. Crie um novo elemento <p> com o textContent "Este é um novo parágrafo criado via JS!".
// Adicione este novo parágrafo ao elemento <div> com o ID "containernovo-elemento"
const novoParagrafo = document.createElement('p');
novoParagrafo.textContent = 'Este é um novo parágrafo criado via JS!';
const containerNovoElemento = document.getElementById('container-novo-elemento');
containerNovoElemento.appendChild(novoParagrafo);
