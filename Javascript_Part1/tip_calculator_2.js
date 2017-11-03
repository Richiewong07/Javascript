// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

  // > totalAmount(100, 'good')
  // 120
  // > totalAmount(40, 'fair')
  // 46

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
