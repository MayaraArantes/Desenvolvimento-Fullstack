console.log("ARRAYS")

// Array é uma super variavel que vai armazenar mais de um dado

// indices       0        1         2          3
let frutas = ["Maça", "Banana", "Laranja", "Morango"]
console.log(frutas)


// Podemos armazenar varios tipos de dados diferentes
let sobreMim = ["Mayara", 21, "Morango"]
console.log(sobreMim)


// Para imprimir um item especifico do nosso Array
// console.log(nomeDoArray[indiceDoItem])
console.log(sobreMim[1])


// metodos de Array
let series = ["Chucky", "The Witcher", "Prison Break", "Stranger Things"]
console.log(series)


// .PUSH - Para acrescentar mais um valor no FINAL
series.push("Dexter")
console.log(series)


// .UNSHIFT - Para acrescentar mais um valor no INICIO
series.unshift("Big Bang: A teoria")
console.log(series)


// .REVERSE() - Organiza os elementos em ordem inversa
series.reverse()
console.log(series)


// .SORT() - Organiza os elementos em ordem crescente numerica ou alfabetica
series.sort()
console.log(series)


// .SHIFT() - Remove o PRIMEIRO valor da lista
series.shift()
console.log(series)


// .pop() - Remove o ULTIMO valor da lista
series.pop()
console.log(series)


// .slice() - Pega os itens de um Array, criando uma nova array sem desmontar o array original
let salaPrincipal = ["Raquel", "Hugo", "Felipe", "Alisson", "Lucas", "Isael", "Lorena", "Luiz","Danilo", "Mayara"]
console.log(salaPrincipal)


let salaTematica = salaPrincipal.slice(3, 8)
console.log(salaTematica)
console.log(salaPrincipal)