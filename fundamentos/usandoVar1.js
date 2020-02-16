{ { { { var sera = 'Será????' } } } } //fora de função estará tudo dentro do escopo global

console.log(sera)

function teste () {
  var local = 123 //só existe dentro do escopo da função
  console.log(local)
}

teste()

//console.log(local) - retornaria erro