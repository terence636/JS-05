const numberRange = (num) => {
  if(num < 0)
      console.log(`${num} is less than 0`);
    
  if(num > 0 && num <= 25)
      console.log(`${num} is between 0 and 25 (inclusive)`);
  
  if(num > 25 && num <= 100)
      console.log(`${num} is between 25 and 100 (inclusive)`);
    
  if(num > 100)
      console.log(`${num} is greater than 100`);
  
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
