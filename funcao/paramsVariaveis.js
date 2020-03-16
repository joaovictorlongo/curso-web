function soma() {
  let soma = 0
  for (i in arguments) {
    soma += arguments[i]
  }
  return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3))

//Exemplos que não se comportariam muito bem nesta ocasião
console.log(soma(2,3,'TESTE'))
console.log(soma('a','b','c','d'))