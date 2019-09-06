document.getElementById('mais-item').addEventListener('click', novoItem);
document.getElementById('salvar-nota').addEventListener('click', cadastrarNota);
//variáveis globais
let itens = []; //array de itens
let notas = [];//array de notas
/** 
 <div>
    <label>Item 1</label>
    <input type="text" id="item0" class="itens-lista">
    <i onclick="apagaItem(this)" class="fa fa-minus-square-o fa-lg" aria-hidden="true" style="margin-left: 1%;"></i>
    <br class="clear">
</div>
*/
function novoItem() {
    //cria os elementos do template com seus atributos
    let div = document.createElement('div');

    let label = document.createElement('label');
    let txtLabel = document.createTextNode(`Item ${itens.length + 1}`);
    label.appendChild(txtLabel);

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', `item${itens.length}`);
    input.setAttribute('class', 'itens-lista');

    let i = document.createElement('i');
    i.setAttribute('class', 'fa fa-minus-square-o fa-lg');
    i.setAttribute('aria-hidden', 'true');
    i.setAttribute('style', 'margin-left: 5px');
    i.setAttribute('onclick', `apagaItem(${itens.length})`);

    let br = document.createElement('br');
    br.setAttribute('class', 'clear');

    //montar lego
    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(i);
    div.appendChild(br);

    //guardando a div(linha) no array global itens
    itens.push(div)
    // console.log(itens.push(div));

    geraTemplateItens();
}




//apagar a linha do array itens e redesenha a tela
function apagaItem(id) {
    //apaga o item do array - os índices serão reorganizados
    itens.splice(id, 1);

    //renomeia o label e o id
    for (let i = 0; i < itens.length; i++) {
        //label
        itens[i].children[0].innerText = `Item ${i + 1}`;
        //input
        itens[i].children[1].setAttribute('id', `Item ${i}`);
    }

    //redesenha os itens na tela, já com os novos label e id corretos
    geraTemplateItens();
}

//desenha os itens na tela baseado no array de itens
function geraTemplateItens() {
    //apaga os itens antigos
    document.getElementById('div-new').innerHTML = '';

    for (let i = 0; i < itens.length; i++) {
        document.getElementById('div-new').appendChild(itens[i]);
    }
}

/*
<div>HTML
    <label>Item 1</label>0
    <input type="text" id="item0" class="itens-lista">1
    <i onclick="apagaItem(this)" class="fa fa-minus-square-o fa-lg" aria-hidden="true" style="margin-left: 1%;"></i>
    <br class="clear">3
</div>
*/
function cadastrarNota() {
    let titulo = document.getElementById('titulo').value;
    if (titulo.trim() === '') {
        alert('Preencha o título');
        return;
    }

    let nota = {
        id : Math.random(),
        titulo: titulo.trim(),
        itens: []//array com os itens da nota
    }

    for (let i = 0; i < itens.length; i++) {
        if (itens[i].children[1].value.trim() === '') {
            alert('preecha todos os itens');
            return;
        }
        nota.itens.push(itens[i].children[1].value.trim());
    }
    notas.push(nota);
    zerarForm();
    exibeNotas();
}

function exibeNotas() {
    let template = '';
    //roda o array de notas
    for (let n = 0; n < notas.length; n++) {
        console.log(notas[n]);
        
        template += `<article class="nota">
                    <h4>${notas[n].titulo}</h4>
                    <ul>`;
        //array de itens
        for (let i = 0; i < notas[n].itens.length; i++) {
            //input.value
            template += `<li>${notas[n].itens[i]}</li>`;
        }

        template += `</ul>
                    <p class="acoes">
                    <a href="#"><i class="fa fa-apple fa-wf" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-android fa-wf" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-chrome fa-wf" aria-hidden="true"></i></a>
                    <a href="#">
                        <i class="fa fa-close fa-wf" onclick="excluirNota(${notas[n].id})" aria-hidden="true"></i>
                    </a>
                    </p>
                    </article>`;


    }//for de notas
    //template com vários article s
    document.getElementById('section-notas').innerHTML = template;
}


function excluirNota(icone) {
    console.log(icone.parentNode.parentNode.parentNode);
}


function zerarForm() {
    //apaga o título
    document.getElementById('titulo').value = '';
    //zera o array de itens
    itens = [];
    //apaga os itens do html
    document.getElementById('div-new').innerHTML = '';
}