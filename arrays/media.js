const notas1s = [10 , 6.5, 8 ,7.5]
const notas2s= [9  , 6  , 6]
const notas3s = [8.5, 9.5]

const notasGeraiss = [notas1s,notas2s,notas3s]

let medias = 0


for (let i = 0; i < notasGeraiss.length; i++) {
  for (let j = 0; j < notasGeraiss[i].length; j++) {
    medias += notasGeraiss[i][j]/notasGeraiss[i].length;
  }
}


const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}

console.log(media)