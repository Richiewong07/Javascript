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
