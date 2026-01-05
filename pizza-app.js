const menu = [
    {name: 'Margherita', price: 8},
    {name: 'Pepperoni', price: 10},
    {name: 'Hawaiian', price: 10},
    {name: 'Veggie', price: 9}
]

let cashInRegister = 100
const orderQueue = []

function addNewPizz(){
    menu.push(pizzaObj)
}

function placeOrder(pname){
    let targetObj =  menu.filter(v => v.name == pname)[0]
    //console.log(targetObj)
    cashInRegister += targetObj.price
    let orderObj = {pizza : targetObj, status: 'ordered'}
    orderQueue.push(orderObj)
    return orderQueue
}
console.log(placeOrder('Veggie'))