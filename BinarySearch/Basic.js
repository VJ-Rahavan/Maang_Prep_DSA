const arr = [1, 3, 4, 8, 19, 23];

const binarySearch = (val) => {
  let l = 0,
    r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((r + l) / 2);
    if (arr[mid] === val) {
      console.log('Found ===> ', arr[mid]);
      return;
    } else if (arr[mid] < val) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
};

binarySearch(1);

//Recursion

const binarySearchRecursion = (target, l = 0, r = arr.length - 1) => {
  const mid = Math.floor((r + l) / 2);
  if (l > r) {
    console.log('Not found ===>');
    return;
  }
  if (arr[mid] === target) {
    console.log(arr[mid]);
    return;
  } else if (arr[mid] < target) {
    binarySearchRecursion(target, mid + 1, r);
  } else {
    binarySearchRecursion(target, l, mid - 1);
  }
};

binarySearchRecursion(1);
