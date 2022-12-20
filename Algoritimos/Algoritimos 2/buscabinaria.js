const listaLivros = require("./arrayOrdenado.js")

function busca(array, de, ate, valorbuscado){
    const meio = Math.floor((de+ate)/2)
    const atual = array[meio];
    if(de > ate){
        return -1
    }
    if(valorbuscado === atual.preco){
        return meio;
    }
    if(valorbuscado < atual.preco){
        return busca(array, de, meio-1, valorbuscado)
    }
    if(valorbuscado > atual.preco){
        return busca(array, meio+1, ate, valorbuscado)
    }
}
console.log(busca(listaLivros, 0, listaLivros.length-1, 25))
console.log("O objeto encontrado é: ", listaLivros[busca(listaLivros, 0, listaLivros.length-1, 25)])