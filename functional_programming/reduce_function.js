var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

// var totalAmount = 0
// for (var i = 0; i < orders.length; i++) {
//   totalAmount += orders[i].amount
// }

var totalAmount = orders.reduce((sum, order) => {   // 0 is first argument that is pass to sum, order is interated item
  return sum + order.amount
}, 0)

console.log(totalAmount)
