//basic implementation

function basicBubbleSort(arr) {
  //does not have a check to see if there has been a swap recently.
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      console.log(arr[j], arr[j + 1]);
    }
    count++;
    console.log("count:", count);
  }
  return arr;
}

// console.log(basicBubbleSort([8, 104, 27, 4, 7, 10, 1, 2, 3, 15]));
// console.log(basicBubbleSort([8, 1, 2, 3, 4, 5, 7, 6]));
console.log(basicBubbleSort([8, 10, 12, 14, 16, 18, 9, 7, 6, 5, 4, 3, 2, 1]));

function optimizedBubbleSort(arr) {
  //has a swap check and if they haven't swapped, we break out
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let hasSwapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        hasSwapped = true;
      }
    }
    count++;
    console.log("Pass count:", count);
    if (!hasSwapped) break;
  }
  return arr;
}

// console.log(optimizedBubbleSort([8, 104, 27, 4, 7, 10, 1, 2, 3, 15]));
// // console.log(optimizedBubbleSort([8, 1, 2, 3, 4, 5, 7, 6]));
