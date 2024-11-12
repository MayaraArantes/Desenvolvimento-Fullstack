console.log("Aula de Loops")

// loops são laços de repetições, uma forma de o pc executar algo por diversas vezes

// for

for (let i = 1; i <= 10; i++); {
    console.log(i)
}

for (let j = 2; j <= 20; j += 2) {
  console.log(j)
}


// while - enquanto

// let identificador = valor

// while (condicao) {
//   codigo a ser executado
// }

let k = 15

while (k > 0) {
  console.log(k)
  k--
}



// operadores logicos

// and e or

// and &&


let login = "Mickey Mouse"

let senha = 123


if (login == "Mickey Mouse" && senha == 123) {
console.log("Acesso Liberado!!")
} else {
  console.log("Acesso Negado!")
}

// or (ou) ||


let membroDoClube = false

let temConvite = true

if (membroDoClube || temConvite) {
  console.log("Seja Bem-Vindo(a) a nossa festa!!")
} else {
  console.log("Sinto muito! voce não é membro e nem convidado! pague 50 reais para se tornar membro")

}


