// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

// good -> 20%
// fair -> 15%
// bad -> 10%

    // > tipAmount(100, 'good')
    // 20
    // > tipAmount(40, 'fair')
    // 6


function tipAmount (cost, service) {
  let tip = 0
  if (service == 'good') {
    tip = 0.20;
  }
  else if (service == 'fair') {
    tip = 0.15;
  }
  else if (service == 'bad') {
    tip = 0.10;
  }
   tipTotal = cost * tip
   return tipTotal
}

console.log(tipAmount(100, 'good'));
