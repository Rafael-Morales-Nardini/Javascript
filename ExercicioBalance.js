/* Sistema de gastos familiares

Crie um objeto que possuira 2 propeidades, ambas do tipo array

* receitas
* despesas

Agora, crie uma função que irá calcular o total de receitas e despesas, e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, segundo o valor do saldo

*/

let family = {
    incomes: [2200.56, 3200.21, 400.33, 300.42],
    expenses: [320.34, 456.82, 1470, 1624.42]
}
function sum(array){
    let total = 0;
for(let value of array){
    total += value
}

    return total
}
function Balance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)
const total = calculateIncomes - calculateExpenses

const positive = total >= 0

let balanceText = "Negativo"
if(positive) {
    balanceText = "Positivo"
}
console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
}

Balance()