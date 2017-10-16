
  function tipAmount (cost, service) {
    tip = 0
    if (service == 'good') {
      tip = 0.20;
    }
    else if (service == 'fair') {
      tip =  0.15;
    }
    else if (service == 'bad') {
      tip = 0.10;
    }
    bill = cost + (cost * tip)
    return bill;
  }

  console.log(tipAmount(100, 'good'));
