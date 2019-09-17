export default class {

    static criaListenerPorId(id, eventoAtrelado, nomeFuncao) {
        document.getElementById(id).addEventListener(eventoAtrelado, nomeFuncao);
    }

    /**
     * 
     * @param {string} elemento 
     * @param {object} atributos - array com as propriedades
     * @param {string} noTexto 
     */
    static criaElementoDom(elemento, atributos = {}, noTexto = null){
        const e = document.createElement(elemento);//cria elemento vazio
        
        //seta os atributos
        Object.keys(atributos).forEach( (valor) => e.setAttribute(valor, atributos[valor]) )
        
        //seta nó de texto
        if (noTexto !== null) e.appendChild(document.createTextNode(noTexto))
        
        return e;
    }

    static agregaElemento(pai, filho) {
        pai.appendChild(filho)
        return pai;
        
    }
}