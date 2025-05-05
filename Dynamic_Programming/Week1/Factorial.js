//Factorial
const fact = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return fact(n - 1) * n;
  }
};

//optimized version of factorial
const obj = {};
const optimizedFact = (n) => {
  if (n in obj) {
    return obj[n];
  }
  if (n === 0 || n === 1) {
    return 1;
  } else {
    const val = optimizedFact(n - 1) * n;
    obj[n] = val;
    return val;
  }
};

console.log(fact(17));
