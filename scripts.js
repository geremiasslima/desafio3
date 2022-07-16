import data from "./list.json" assert {type: 'json'};


const minValue = data.reduce((prev, current) => {
  return prev.valor < current.valor && prev.valor !== 0.0 ? prev : current
})
const minValueConvert = JSON.stringify(minValue)
console.log('O menor valor de faturamento ocorrido em um dia do mês: '+ minValueConvert)

const maxValue = data.reduce((prev, current) => {
  return prev.valor > current.valor && prev.valor !== 0.0 ? prev : current
})
const maxValueConvert = JSON.stringify(maxValue)

console.log('O maior valor de faturamento ocorrido em um dia do mês: '+ maxValueConvert)



const subtractDayZer = data.filter(element => element.valor !== 0.0)



const sumBillingValueMonth = data.reduce((sumBillingValueMonth, current) =>
  sumBillingValueMonth + current.valor / subtractDayZer.length, 0
)

const billingGreaterDayFilter = data.filter(element => element.valor >= sumBillingValueMonth)

const billingGreaterDayFilterCovert = JSON.stringify(billingGreaterDayFilter)






console.log('Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: '+ billingGreaterDayFilterCovert)