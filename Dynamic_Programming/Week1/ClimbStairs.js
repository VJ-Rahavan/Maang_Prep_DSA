//Climb Stairs with brute-force
function climbStairsWithBruteForce(n) {
  const arr = [1, 2];
  let count = 0;

  const check = (sum) => {
    for (let i = 0; i < arr.length; i++) {
      if (sum + arr[i] === n) {
        count++;
      }
      if (sum + arr[i] < n) {
        check(sum + arr[i]);
      }
    }
  };

  check(0);

  return count;
}

//Climb Stairs with memoization
function climbStairs(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 1) return 1;
  if (n === 2) return 2;
  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
}

console.log(climbStairs(2));
