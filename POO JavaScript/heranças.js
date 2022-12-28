import User from "./class.js"
//Classe admin é uma extensão da classe User, logo ela herda todas as propriedades da classe User
//User é uma super classe, e Admin é uma sub classe de User
class Admin extends User {
    constructor(nome, email, nascimento, cargo = "admin", ativo = true){
        super(nome, email, nascimento, cargo, ativo)//Traz as propriedades de User
    }
}
const admin = new Admin("Admin", "Admin@gmail.com", "02/03/2000")
console.log(admin)
console.log(admin.exibirInfos())