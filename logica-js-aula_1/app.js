// Verificando os dias da semana 
alert('Bem vindo');
let diaDaSemana = prompt('Qual o dia da semana?');
if (diaDaSemana == 'Sabado') {
    alert('Bom final de semana');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom final de semana');
} else {
  alert('Boa semana');
}
// Verificando positivo ou negativo
alert('Vamos verificar ser um numero e positivo ou negativo')
let numeroUsuario = prompt('Escolhar um numero');
if (numeroUsuario <= 0 ) {
    alert('Esse e um numero negativo')
}if (numeroUsuario >= 0) {
    alert('Esse numero e positivo')
}
// Pontuação 
alert('Sistama de pontuação')
let pontuação = prompt('Quantos pontos você conseguiu ?')
if (pontuação >= 100) {
    alert('Parabéns, você venceu')
}else {
    alert('Tente novamente para Ganhar')
}
// Saldo conta 
alert('Saldo conta ')
let saldo = 500
alert(`Ola o seu saldo disponivel e R$${saldo}`)
// Nome
let nome = prompt('Qual o seu nome')
alert(`Boas vinda, ${nome}`)

