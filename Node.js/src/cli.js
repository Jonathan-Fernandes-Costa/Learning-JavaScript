import pegaarquivo from "../index.js";

const caminho = process.argv;

async function processaTexto(caminho){
    const resultado = await pegaarquivo(caminho[2]);
    // return resultado;
    console.log(resultado)
}
processaTexto(caminho)