let min
let max
let al1
let al2
let al3
let al4
let count = 0

do {
  min = 1
  max = 10
  al1 = Math.floor(Math.random() * (max - min + 1) + min)
  al2 = Math.floor(Math.random() * (max - min + 1) + min)
  al3 = Math.floor(Math.random() * (max - min + 1) + min)
  al4 = Math.floor(Math.random() * (max - min + 1) + min)
  count = count + 1
} while (al2 != al3)

let matriz1 = []
let matriz2 = []
let multiplicacion = new Array(al1)

if (al2 === al3) {
  // matriz 1
  for (let i = 0; i < al1; i++) {
    matriz1[i] = []
    for (let j = 0; j < al2; j++) {
      let numero = Math.floor(Math.random() * (max - min + 1) + min)
      matriz1[i][j] = numero
    }
  }

  //matriz 2
  for (let i = 0; i < al3; i++) {
    matriz2[i] = []
    for (let j = 0; j < al4; j++) {
      let numero = Math.floor(Math.random() * (max - min + 1) + min)
      matriz2[i][j] = numero
    }
  }

  for (let x = 0; x < multiplicacion.length; x++) {
    multiplicacion[x] = new Array(al4).fill(0)
  }

  function resultado() {
    for (let x = 0; x < multiplicacion.length; x++) {
      for (let y = 0; y < multiplicacion[x].length; y++) {
        for (let z = 0; z < al1; z++) {
          multiplicacion[x][y] =
            multiplicacion[x][y] + matriz1[x][z] * matriz2[z][y]
        }
      }
    }
    return multiplicacion
  }

  console.log('Intento n°', count)
  console.log('Primer Matriz ', al1, al2)
  console.log('Segunda Matriz ', al3, al4)
  console.log('Matriz resultado ', al1, al4)
  console.log(resultado())
}
