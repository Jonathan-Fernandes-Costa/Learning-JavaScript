function extraiURL(listaDeLinks){
    return listaDeLinks.map((objLink) => Object.values(objLink).join())

}
export default function listaValidada(listaDeLinks){
    return extraiURL(listaDeLinks)
}