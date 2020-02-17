const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
  if (x == 5) {
    break //age em cima dos laços (for/while) jogando pra fora da estrutura
  }
  console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {
  if (y == 5){
    continue //age em cima dos laços (for/while) pulando a instrução corrente
  }
  console.log(`${y} = ${nums[y]}`)
}

externo: for (let a in nums) {
  for (let b in nums) {
    if (a == 2 && b == 3) break externo
    console.log(`Par = ${a}, ${b}`)
  }
  console.log('Fim!')
} //não usar esse tipo de codigo :(. Melhor utilizar funções