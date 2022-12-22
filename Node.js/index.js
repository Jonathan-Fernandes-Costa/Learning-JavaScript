import fs from 'fs';//Biblioteca do Node.js para trabalhar com arquivos
import chalk from "chalk";//Biblioteca para estilizar os resultados do console

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
        console.log(chalk.green(texto))
    }catch(erro){
        trataerro(erro)
    }finally{
        console.log(chalk.bgYellow("Operação finalizado"))
    }
}
pegaarquivo("./texto.md");
//1° Expresão Regular: \[[^[\]]*?\]
//2°