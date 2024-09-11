const calculate = (a, b, operator) => {
  if (a === null || b === null){
    console.log('invalid number')
    
  };
  if (operator != 'add' && operator != 'subtract' && operator != 'multiply' && operator != 'divide'){
    console.log('invalid operation')
  };
  if (b === 0 && operator === 'divide'){
    console.log('cannot divide by zero')
  };
  if(operator === 'add'){
  console.log(a + b);
  }
  else if(operator === 'subtract'){
    console.log(a - b);
  }

  else if(operator === 'multiply'){
    console.log(a * b);
  }

  else if(operator === 'divide'){
    console.log(a / b);
  }

  else('invalid expression');
  }  

   calculate(4, 2, 'divide');
   calculate(2, '7', 'multiply');

   
