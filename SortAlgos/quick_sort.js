function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  //   console.log(arr);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;
  let pivotIndex = pivot(arr, left, right);

  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);
  return arr;
}

console.log(quickSort([100, -3, 4, 8, 2, 1, 5, 7, 6, 3]));

// console.log(rewriteQuickSort([100, -3, 4, 8, 2, 1, 5, 7, 6, 3]));
