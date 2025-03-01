function selectionSort(arr) {
  //some more operations due to using the value as the min instead of the index.
  for (let i = 0; i < arr.length; i++) {
    let index = i;
    let min = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = Math.min(min, arr[j]);
        index = j;
        //console.log(index);
      }
    }
    if (i !== index) {
      //console.log(i, index);
      let temp = arr[i];
      arr[i] = min;
      arr[index] = temp;
    }
  }

  return arr;
}

// console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));

function indexSelectionSort(arr) {
  //min is equal to the index where the lowest is found now, instead of the value. Gets rid of 2 declaring operations I believe. index = i and min = Math.min()
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
        //console.log(index);
      }
    }
    if (i !== min) {
      //console.log(i, index);
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}

console.log(indexSelectionSort([0, 2, 34, 22, 10, 19, 17]));

// console.log(rewriteSelection([0, 2, 34, 22, 10, 19, 17]));
