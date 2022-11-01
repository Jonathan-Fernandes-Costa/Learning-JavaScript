//**************Criando um cliente e pegando seus dados
const cliente = {
    nome: "José",
    idade: 30,
    cpf:"4124121241",
    email:"jose@gmail.com"
}
console.log(`Nome do cliente é ${cliente.nome} que tem ${cliente.idade} anos`);
console.log(cliente.cpf.substring(0,3));
//Função substring(0, 3) está exibindo apenas os 3 primeiros digitos do cpf

console.log("*************************")
//************Usando chaves para pegar os valores
const chaves = ["nome", "idade", "cpf", "email"]
console.log(cliente[chaves[0]])
chaves.forEach(info=>console.log(cliente[info]))