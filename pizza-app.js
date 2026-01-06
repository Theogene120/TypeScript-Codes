const menu = [
    {name: 'Margherita', price: 8},
    {name: 'Pepperoni', price: 10},
    {name: 'Hawaiian', price: 10},
    {name: 'Veggie', price: 9}
]

let cashInRegister = 100
const orderQueue = []
let nextOrderId = 1

function addNewPizz(){
    menu.push(pizzaObj)
}

function placeOrder(pname){
    let targetObj =  menu.filter(v => v.name == pname)[0]
    cashInRegister += targetObj.price
    let newOrder = {id: nextOrderId++, pizza : targetObj, status: 'ordered'}
    orderQueue.push(newOrder)
    return newOrder
}
console.log(placeOrder('Veggie'))

console.log(orderQueue)

function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order
}

console.log('***************************************************')
console.log(completeOrder(1))