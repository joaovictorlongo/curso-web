const prod1 = {}
prod1.nome = 'Celular ultra mega'
prod1.preco = 3698.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
  nome: 'Camisa polo',
  preco: 79.90,
  obj: {
    obj: 'teste'
  }
}

console.log(prod2)