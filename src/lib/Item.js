import Helpers from './Helpers';

export default class Item {
    constructor() {
        this.itens = [];
    }

    /*
    * getters and setters
    */

    getItem() {
        return this.itens;
    }

    setItem(item) {
        this.itens.push(item)
    }

    /**
     *   Função para gerar um novo item baseado no template
        <div>
            <label>Item 1</label>
            <input type="text" id="item0" class="itens-lista">
            <i onclick="apagaItem()" class="fa fa-minus-square-o fa-lg" aria-hidden="true" style="margin-left: 1%;"></i>
            <br class="clear">
        </div>
 */
    novoItem() {
        let div = Helpers.criaElementoDom('div');
        let label = Helpers.criaElementoDom('label', {}, `Item ${this.getItem().length + 1}`);
        let input = Helpers.criaElementoDom('input', {
            type: 'text',
            id: `item${this.getItem().length}`,
            class: 'itens-lista'
        });

        let i = Helpers.criaElementoDom('i', {
            style: 'margin-left: 5px',
            'aria-hidden': 'true',
            class: 'fa fa-minus-square-o fa-lg',

            onclick: this.apagaItem(`${this.getItem().length}`)
        });

        let br = Helpers.criaElementoDom('br', { class: 'clear' });

        //montar lego - encaixa os elementos dentro da div (appendChild DOM)
        div = Helpers.agregaElemento(div, label);
        div = Helpers.agregaElemento(div, input);
        div = Helpers.agregaElemento(div, i);
        div = Helpers.agregaElemento(div, br);

        //guardando a div(linha) no array global itens
        this.setItem(div);
        return true;
    }
    /**
     * apaga o item do array itens e o reorganiza 
     * juntamente com os textos, id's etc
     * @param {*} id 
     */
    apagaItem(id) {
        this.itens.splice(id, 1);

        //renomeia o label e o id
        for (let i = 0; i < this.itens.length; i++) {
            //label
            this.itens[i].children[0].innerText = `Item${i + 1}`;
            //input
            this.itens[i].children[1].setAttribute('id', `Item${i}`);
            this.itens[i].children[2].setAttribute('onclick', `apagaItem(${i})`);
        }
    }
};