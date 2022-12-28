//Estrutura das classes:
export default class User {
    constructor(nome, email, nascimento, cargo, ativo = true){
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.cargo = cargo || 'estudante'
        this.ativo = ativo
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
    
}