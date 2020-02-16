let numero = 1
{
  let numero = 2
  console.log('Dentro =', numero) // prefrencia sempre do escopo menor :D
}
console.log('Fora = ', numero)

//Let trabalha com escopo global, função e bloco.