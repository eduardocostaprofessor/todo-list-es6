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

    /*
    * Gera uma linha/div para o item da nota
    */
    novoItem() {
        let div = Helpers.ciraElementoDom('div');
        let label = Helpers.ciraElementoDom('label', {}, `Item ${this.itens.length + 1}`);
        let input = Helpers.ciraElementoDom('input', {
            type: 'text',
            id: `item${this.itens.length}`,
            class: 'itens-lista'
        });

        let i = Helpers.ciraElementoDom('i', {
            style: 'margin-left: 5px',
            'aria-hidden': 'true',
            class: 'fa fa-minus-square-o fa-lg',

            onclick: `apagaItem(${this.itens.length})`
        }
            // ,
            // null,{
            //     evt : 'click', fn: apagaItem
            // }
        );

        let br = Helpers.ciraElementoDom('br', { class: 'clear' });

        //montar lego - encaixa os elementos dentro da div
        div = Helpers.agregaElemento(div, label);
        div = Helpers.agregaElemento(div, input);
        div = Helpers.agregaElemento(div, i);
        div = Helpers.agregaElemento(div, br);

        //guardando a div(linha) no array global itens
        this.setItem(div);
        return true;
    }

    apagaItem(id) {
        console.log(id);
        this.itens.splice(id, 1);

        //renomeia o label e o id
        for (let i = 0; i < this.itens.length; i++) {
            //label
            this.itens[i].children[0].innerText = `Item${i + 1}`;
            //input
            this.itens[i].children[1].setAttribute('id', `Item${i}`);
            this.itens[i].children[2].setAttribute('onclick', `apagaItem(${i})`);
        }

        console.log(this.item);
        

        //    this.itens = this.getItem().filter((v, i) => {
        //         return i !== id;
        //     });
    }
};