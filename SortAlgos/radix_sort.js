function getDigit(num, place) {
  //gets the number at a certain place value... 0 = ones, 1 = tens, 2 = hundreds
  return Math.floor(Math.abs(num) / 10 ** place) % 10;
}

// console.log(getDigit(12345, 0));
// Math.floor( 12345 / 10^0)) % 10 === Math.floor(12345) % 10 === 12345 % 10 === 5
// Math.floor( 12345 / 10^1)) % 10 === Math.floor(1234.5) % 10 === 1234 % 10 === 4
// Math.floor( 12345 / 10^2)) % 10 === Math.floor(123.45) % 10 === 123 % 10 === 3
// Math.floor( 12345 / 10^3)) % 10 === Math.floor(12.345) % 10 === 12 % 10 === 2
// Math.floor( 12345 / 10^4)) % 10 === Math.floor(1.2345) % 10 === 1 % 10 === 1
// Math.floor( 12345 / 10^5)) % 10 === Math.floor(.12345) % 10 === 0 % 10 === 0

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// console.log(digitCount(2145));
// Math.floor(Math.log10(2145)) + 1 ==> log10(1000) === 3 ===> Math.floor(3.---) + 1 === 3 + 1 === 4

function mostDigits(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(digitCount(nums[i]), max);
  }
  return max;
}

function radixSort(arr) {
  let numDigits = mostDigits(arr);
  for (let k = 0; k < numDigits; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let currentDigit = getDigit(arr[i], k);
      buckets[currentDigit].push(arr[i]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}
console.log(
  radixSort([
    1, 9, 10, 400, 5070, 35021, 421, 304, 597, 123, 214, 7, 5, 706, 54, 807,
  ])
);

// console.log(
//   rewriteRadixSort([
//     1, 9, 10, 400, 5070, 35021, 421, 304, 597, 123, 214, 7, 5, 706, 54, 807,
//   ])
// );
