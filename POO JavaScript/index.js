import User from "./User.js";
import {Admin, Professor} from "./Admin&Professor.js"

const novoProfessor = new Professor("Testes", "teste@gmail.com", "adada")
console.log(novoProfessor)
const newUser = new User("Usuario", "usuario@", "dsadada")
console.log(newUser.exibirInfos())