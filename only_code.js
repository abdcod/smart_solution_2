function nthFibo(n) {
  
  if (n === 1) return 0;
  if (n === 2) return 1;
  let sum = 0;
  let sum_1 = 1;
  let i = 1;
  
  while (i < (n - 1)) 
    {
      if (i % 2 === 1)
        {
          sum = sum + sum_1;
        }
      else 
        {
          sum_1 = sum_1 + sum;
        }
      i++;
    }
  if (n % 2 === 1)
    {
      return sum;
    }
  else return sum_1;
}
