const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; numeros[i] >= 300; i -= 2) {
  console.log(numeros[i]);
}





const array = [10, 20, 30, 40, 50, 60, 70, 80, 100]

const sum = (num)=> {
  console.log(num * 10)
}


array.forEach(sum)