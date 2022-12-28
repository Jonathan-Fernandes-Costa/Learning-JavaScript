import User from "./class.js"
//Classe admin é uma extensão da classe User, logo ela herda todas as propriedades da classe User
//User é uma super classe, e Admin é uma sub classe de User
class Admin extends User {
    constructor(nome, email, nascimento, cargo = "admin", ativo = true){
        super(nome, email, nascimento, cargo, ativo)//Traz as propriedades de User
    }
    criarTurma(nomedaTurma, vagas){
        return `Turma: ${nomedaTurma}, quantidade de vagas: ${vagas}`
    }
}
const admin = new Admin("Admin", "Admin@gmail.com", "02/03/2000")
console.log(admin)
console.log(admin.exibirInfos())
console.log(admin.criarTurma("2° Ano", 20))

class Professor extends User{
    constructor(nome, emai, nascimento, cargo = "professor", ativo = true){
        super(nome, emai, nascimento, cargo, ativo)
    }

    criarAula(horario, materia){
        return `Aula de ${materia}, no horário: ${horario}, agendada`
    }
    darNota(nomeDoALuno, nota){
        return `O aluno ${nomeDoALuno}, tirou ${nota} `
    }
}
const professor = new Professor("Professor Mario", "mario@gmail.com", "03/02/1988")
console.log(professor)
console.log(professor.criarAula("10 PM", "Física"))
console.log(professor.darNota("Joan", 10))