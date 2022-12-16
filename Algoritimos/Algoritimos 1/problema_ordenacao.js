const livros = require("./complemento_problema1.js")
let menor = 0
let maior = 0
for(let i = 0; i < livros.length; i++){ 
    if(livros[i].preco < livros[menor].preco){
        menor = i
    }
}
for(let i = 0; i < livros.length; i++){ 
    if(livros[i].preco > livros[maior].preco){
        maior = i
    }
}
console.log(`O livro mais barato custa ${livros[menor].preco} e se chama: ${livros[menor].nome}`)
console.log(`O livro mais caro custa ${livros[maior].preco} e se chama: ${livros[maior].nome}`)
