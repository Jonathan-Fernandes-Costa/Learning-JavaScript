import pegaarquivo from "./index.js";
import chalk from "chalk";
import fs from 'fs';
const caminho = process.argv;

function imprimir(lista){
    console.log(chalk.yellow('Os links: '), lista)
}
async function processaTexto(argumentos){
     const caminho = argumentos[2];

    if(fs.lstatSync(caminho).isFile()){
    const resultado = await pegaarquivo(caminho);
    imprimir(resultado)
    }else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async(nomearquivo) => {
            const lista = await pegaarquivo(`${caminho}/${nomearquivo}`)
            imprimir(lista)
        })
    }
    
     
}
processaTexto(caminho)