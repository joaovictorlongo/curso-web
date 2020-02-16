//par nome/valor
const saudacao = 'Opa' //conexto léxico 1

function exec () {
  const saudacao = 'falaaaa' // contexto léxico 2
  return saudacao
}
//Objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: 'Pedro',
  iadde: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua muito top',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)