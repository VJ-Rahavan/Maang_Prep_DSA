// input
//  piles = [3,6,7,11], h = 8

const checkSpeed = (piles, hr) => {
  let l = 0,
    r = Math.max(...piles);
  let min = r;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    let sum = 0;

    for (let i of piles) {
      sum += Math.ceil(i / mid);
    }
    console.log(mid, min, sum);

    if (sum > hr) {
      l = mid + 1;
    } else {
      min = Math.min(mid, min);
      r = mid - 1;
    }
  }

  console.log(min);
};

checkSpeed([30, 11, 23, 4, 20], 6);
