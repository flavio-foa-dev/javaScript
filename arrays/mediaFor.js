const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; numeros[i] >= 300; i -= 2) {
  console.log(numeros[i]);
}





const array = [10, 20, 30, 40, 50, 60, 70, 80, 100]

const sum = (num)=> {
  console.log(num * 10)
}


array.forEach(sum)


const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => {
  return medias[indice] >= 7
});

console.log(reprovados);



const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
     return acumulador + nota;
    },0);

  const media = somaDasNotas / notasDaSala.length;

  return media;
}

console.log(calculaMedia(salaJS))



const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

let meuSet = new Set(nomes)
meuSet = [...meuSet]

console.log(meuSet)