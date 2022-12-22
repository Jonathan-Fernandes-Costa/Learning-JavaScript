import pegaarquivo from "./index.js";
import chalk from "chalk";
import fs from 'fs';
import listaValidada from "./http-validacao.js";
const caminho = process.argv;

function imprimir(valida, lista, identificador = ''){
    if(valida){
    console.log(chalk.yellow('Lista Validada'),
    chalk.black.bgGreen(identificador),
    listaValidada(lista))
    }else{
        console.log(chalk.yellow('Links: '),
     chalk.black.bgGreen(identificador),
      resultado)
    }
    
}
async function processaTexto(argumentos){
    const caminho = argumentos[2];
    const valida = argumentos[3]
    try{
        fs.lstatSync(caminho);
    }catch(erro){
        if(erro.code === 'ENOENT'){
            console.log(chalk.red("Arquivo ou diretório não existe!"))
            return;
        }
    }

    if(fs.lstatSync(caminho).isFile()){
    const resultado = await pegaarquivo(caminho);
    imprimir(resultado)
    }else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async(nomearquivo) => {
            const lista = await pegaarquivo(`${caminho}/${nomearquivo}`)
            imprimir(lista, nomearquivo)
        })
    }
    
     
}
processaTexto(caminho)