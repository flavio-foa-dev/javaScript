const data = require('./data.json')

// console.log(data)

// const getPerson = (list, key, value) => {
//   console.log(list.findIndex(item => item[key].includes(value)))
//   return list.find((item) => item[key].includes(value))
// }

// console.log(getPerson(data, "nome", "Kirby"))
// console.log(getPerson(data, "nome", "Olva"))
// console.log(getPerson(data, "telefone", "1918820860"))

// console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

// const filtered = (list, key) => {
//   return list.filter((item) => {
//     return item.endereco.apartamento && !item.endereco.hasOwnProperty(key)

//   })
// }

// console.log(filtered(data, "complemento"))


console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

const order = (list, option) => {
  return list.sort((a, b) => {
   if(a[option] < b[option])return -1;
   if(a[option] > b[option])return 1;
   return 0;
  })
 }

 console.log(order(data, "nome"))