/**
 * Este arquivo app representa a criação de um aplicativo todo-list para estudo dos 
 * conceitos de ECMAScript, DOM, arrays objetos estruturas de decisão e laços de repetição 
 * do curso de JavaScript criado por mim, 
 *  Professor Eduardo costa: https://github.com/eduardocostaprofessor/
 * 
 * Projeto em desenvolvimento. Será integrada a uma API Nodejs posteriormente
 * 
 */
import Helpers from './lib/Helpers';
import ItemClass from './lib/Item';

const Item = new ItemClass();

/**
 * Cria a linha do imput para cadastrar um novo item
 */
const novoItem = () => {
    if (Item.novoItem()) geraTemplateItens();
}

/*
 * por quê eu precisei pendurar em window? só assim funcionou
 * A intenção era usar somento o método apagaIten(id) da classe item.
 * Mas não deu certo sem pindurar essa função abaixo em window.
 * 
 * Na função init() abaixo funciona como eu gostaria que funcionasse a apagaItem. Não precisei 
 * pendurar em window porque os elementos já existem na tela. No caso dos elementos criados 
 * dinamicamente não funciona.. acredito que por isso eu tive que pendurar a função apagaItem em
 * window!
 * 
 * Pretendo tentar fazer uma espécie de .on() do jQuery. Se fosse com jQuery funcionaria!!!
 */
window.apagaItem = function (id) {
    //apaga o item
    Item.apagaItem(id);
    // console.log(Item.getItem()); 
    geraTemplateItens()   
}

const geraTemplateItens = () => {
    document.getElementById('div-new').innerHTML = '';

    const itens = Item.getItem();
    
    const pai = document.getElementById('div-new');

    itens.forEach((item) => Helpers.agregaElemento(pai, item));
}

/**
 * Função para pesquisa de notas no DOM
 */
const pesquisarNota = () => {
    const texto = document.getElementById('pesquisar').value.trim();
    console.log(texto);

}

//componentes de inicialização
const init = () => {
    // document.getElementById('mais-item').addEventListener('click', novoItem);
    Helpers.criaListenerPorId('mais-item', 'click', novoItem);
    Helpers.criaListenerPorId('pesquisar', 'keyup', pesquisarNota);
}
//inicia as configurações iniciais
init();