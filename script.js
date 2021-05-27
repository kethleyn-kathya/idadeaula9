let AnoAtual = '2021'

let nascimento = prompt(`Digite aqui o seu ano de nascimento`)
nascimento = parseInt(nascimento)

let nome = prompt(`Digite aqui qual o seu nome`)


let resultado = final (nascimento, AnoAtual)

function final (nascimento, AnoAtual) {
    return AnoAtual - nascimento
   }
   
 console.log(resultado);

 alert(`O seu nome é ${nome} e sua idade é ` + resultado)
  
