import fs from 'fs';//Biblioteca do Node.js para trabalhar com arquivos
import chalk from "chalk";//Biblioteca para estilizar os resultados do console
const textoteste = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'
function trataerro(erro){
    throw new Error(chalk.red(erro.code, "Arquivo não encontrado!"))//Throw joga os erros no console
}
// Usando then()
/* function pegaarquivo(caminhoArquivo){
    const encoding = 'utf-8';//Tipo de texto que o readfile vai receber
    fs.promises.readFile(caminhoArquivo, encoding)
    .then((texto) => console.log(chalk.blue(texto)))//Código assicrono retorna o resultado
    .catch((erro) => trataerro(erro))//Código assicrono retornando o erro.
} */

// async/await (mais novo), mais simples de converter codigos sincronos em assicronos
async function pegaarquivo(caminhoArquivo){
    try{
        const encoding = 'utf-8';//Tipo de texto que o readfile vai receber 
        const texto = await fs.promises.readFile(caminhoArquivo, encoding)
        console.log(extraiLinks(texto))
    }catch(erro){
        trataerro(erro)
    }finally{
        console.log(chalk.bgYellow("Operação finalizado"))
    }
}
function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)]
     const resultados = capturas.map((captura) => ({[captura[1]] : captura[2]
    }))
    return resultados; 
}
pegaarquivo("./texto.md");
// Expresão Regular: \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)
