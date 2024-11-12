console.log("Funções")

// O que é uma função?? É um consunto de instruções que executa uma tarefa.

//Estrutura

// function nomeDaFunção(){
//     codigo a ser executado
// }

function saudacao(){
    console.log("BOA NOITE!!!!!")
}

saudacao() // Para executar uma função

// O que são os parâmetros
function cadastro(nome, idade, cidade){
    console.log(nome)
    console.log(idade)
    console.log(cidade)
    console.log(nome, idade, cidade)
}

cadastro("Bruce Wayne", "36 anos", "Gotham")

// Variáveis dentro de um parâmetro

let comidaPreferidaDoJoao = "Ratatouille"

function mostrarComida(comida){
    console.log(comida)
}

mostrarComida(comidaPreferidaDoJoao)

// Arrow Function (Função de flecha) =>

// const nomeDaFuncao = (parametros) => {codigo a ser executado}

const comidaPreferidaDaFer = (comida) => console.log(comida)
comidaPreferidaDaFer("Escondidinho de Carne Seca")


const multiplicar = (primeiroNum, segundoNum) => primeiroNum * segundoNum
console.log(multiplicar(3,9))