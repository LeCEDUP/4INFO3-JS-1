
const titulo = document.getElementById('meu-titulo');
titulo.textContent = 'DOM Manipulado!';


const paragrafo = document.querySelector('.meu-paragrafo');
paragrafo.classList.add('destaque');


const botao = document.getElementById('meu-botao');
botao.addEventListener('click', function() {
  paragrafo.textContent = 'Texto alterado pelo clique!';
});


const novoParagrafo = document.createElement('p');
novoParagrafo.textContent = 'Este é um novo parágrafo criado via JS!';

const container = document.getElementById('container-novo-elemento');
container.appendChild(novoParagrafo);

