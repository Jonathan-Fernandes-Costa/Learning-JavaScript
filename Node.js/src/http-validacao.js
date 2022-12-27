async function verStatus(listaDeUrls) {
    const arrStatus = await Promise.all(listaDeUrls.map(async (url) => {
            try {
                const res = await fetch(url)
                return `${res.status} - ${res.statusText}`;
            } catch (erro) {
                return trataErro2(erro)
            }
        }))
    return arrStatus;

}
function trataErro2(erro) {
    if(erro.cause.code === 'ENOTFOUND'){
        return "Link não existe"
    }else{
        return "Ocorreu um erro"
    }
    
}
export default async function listaValidada(listaDeLinks) {
    // console.log(listaDeLinks)
    const status = await verStatus(listaDeLinks)
    return listaDeLinks.map((link, indice) => ({
        link,
        status: status[indice]
    }))
}
