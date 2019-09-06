import Helpers from './lib/Helpers';
import ItemClass from './lib/Item';

const Item = new ItemClass();

/**
    Função para gerar um novo item baseado no template
    <div>
        <label>Item 1</label>
        <input type="text" id="item0" class="itens-lista">
        <i onclick="apagaItem(this)" class="fa fa-minus-square-o fa-lg" aria-hidden="true" style="margin-left: 1%;"></i>
        <br class="clear">
    </div>
 */
const novoItem = () => {
    if (Item.novoItem()) geraTemplateItens();
}

//por que eu precisei pendurar em window? só assim funcionou
window.apagaItem = function (id) {
    
    //apaga o item
    Item.apagaItem(id);
    console.log(Item.getItem()); 
    geraTemplateItens()   
}

const geraTemplateItens = () => {
    document.getElementById('div-new').innerHTML = '';

    const itens = Item.getItem();
    
    const pai = document.getElementById('div-new');

    itens.forEach((item) => Helpers.agregaElemento(pai, item));
}



const pesquisarNota = () => {
    const texto = document.getElementById('pesquisar').value.trim();
    // console.log(texto);

}

//componentes de inicialização
const init = () => {
    // document.getElementById('mais-item').addEventListener('click', novoItem);
    Helpers.ciraListenerPorId('mais-item', 'click', novoItem);
    Helpers.ciraListenerPorId('pesquisar', 'keyup', pesquisarNota);
}
//inicia as configurações iniciais
init();