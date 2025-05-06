//Optimized version of fibonacci series
const fib = (n) => {
  if (n in obj) {
    return obj[n];
  }
  if (n === 1 || n === 2) {
    return 1;
  } else {
    const val = fib(n - 1) + fib(n - 2);
    obj[n] = val;
    return val;
  }
};

//Fibonacci implementation in bottom-up approach
const fibBU = (n) => {
  const arr = [0, 1];
  for (let i = 1; i < n; i++) {
    const val = arr[i] + arr[i - 1];
    arr.push(val);
  }
  console.log(arr);
  return arr[n];
};

console.log(fibBU(9));
