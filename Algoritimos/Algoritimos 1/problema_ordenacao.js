let livros = require("./complemento_problema1.js")
for(let i = 0; i < (livros.length); i++){
    menor = menorvalor(livros, i)
    precoAtual = livros[i];
    precoBaixo = livros[menor]
    livros[i] = precoBaixo
    livros[menor] = precoAtual

}
function menorvalor(array, chave){
    let x = chave
    for(let i = chave; i < array.length; i++){ 
        if(array[i].preco < array[x].preco){
            x = i
        }
    }
    return x;
}
console.log(`Os livros ordenados do mais barato para o mais caro: 
`)
console.log(livros)