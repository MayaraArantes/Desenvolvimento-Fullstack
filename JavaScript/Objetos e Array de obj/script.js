console.log("Revisão")

// Array é uma super variável que armazena mais de um dado

//                    0         1         2       3        4       5        6   
let diasSemana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado']
console.log(diasSemana)

console.log(diasSemana[3])


// Objetos
// É uma coleção de informações ou propriedades

// Estrutura

// const objeto = {
//     chave1: valor1,
//     chave2: valor2,
//     chave3: valor3
// }

const pessoa = {
    nome: "Rafael",
    idade: 45,
    profissao: "Engenheiro"
}

console.log(pessoa)

// Acessando propriedade do objeto
console.log(pessoa.profissao)

// Adicionando uma nova propriedade no objeto
pessoa.endereco = "Rua dos Bobos Nº0"
console.log(pessoa)

// Removendo uma propriedade do objeto
delete pessoa.idade

// Array de Objetos
// É onde cada elemento do array é um objeto

//                          0         1        2          3
// const devsSeniors = [{objeto1},{objeto2},{objeto3},{objeto4}]

const devsSeniors = [
    {
        nome: "Pedro",
        corFavorita: "Amarelo",
        comidaPreferida: "Strogonoff"
    },
    {
        nome: "Ana",
        corFavorita: "Roxo",
        comidaPreferida: "Macarrão"
    },
    {
        nome: "Lincon",
        corFavorita: "Azul",
        comidaPreferida: "Pizza"
    },
    {
        nome: "Isaac",
        corFavorita: "Roxo",
        comidaPreferida: "Churrasco"
    }
]

console.log(devsSeniors)

// Acessando o valor da propriedade de um objeto dentro do array
console.log(devsSeniors[0].comidaPreferida)

// Adicionando um novo objeto no final do array
devsSeniors.push(
    {
        nome: "Aluno Novo",
        corFavorita: "Tomato",
        comidaPreferida: "Tacacá"
    }
)

console.log(devsSeniors)

// Removendo propriedade de um objeto que está dentro de um array
delete devsSeniors[4].corFavorita