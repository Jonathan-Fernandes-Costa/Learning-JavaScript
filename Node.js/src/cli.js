import pegaarquivo from "./index.js";
import chalk from "chalk";
import fs from 'fs';
const caminho = process.argv;

async function processaTexto(argumentos){
     const caminho = argumentos[2];

    if(fs.lstatSync(caminho).isFile()){
    const resultado = await pegaarquivo(argumentos[2]);
    console.log(chalk.yellow('Os links: '), resultado) 
    }else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach((nomearquivo) => {
            const lista = pegaarquivo(`${caminho}/${nomearquivo}`)
            console.log(lista)
        })
        console.log(arquivos);
    }
    
     
}
processaTexto(caminho)