function countUniqueValues(arr) {
  let map = {};
  for (let num of arr) {
    map[num] = ++map[num] || 1;
  }
  console.log(map);

  return Object.keys(map).length;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]));
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(countUniqueValues([]));
// console.log(countUniqueValues([-2, -1, -1, 0, 1]));

function twoPointersUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let left = 0;
  let right = 1;
  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      //console.log(arr[left], arr[right]);
      left++;
      arr[left] = arr[right];
    }
    right++;
  }
  return ++left;
}

// console.log(twoPointersUniqueValues([1, 1, 1, 1, 1, 1, 2]));
// console.log(twoPointersUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(twoPointersUniqueValues([]));
// console.log(twoPointersUniqueValues([-2, -1, -1, 0, 1]));

function findMaxSum(nums, k) {
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }
  let tempSum = maxSum;
  for (let i = k; i < nums.length; i++) {
    tempSum = tempSum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// console.log(findMaxSum([2, 3, 4, 1, 5, 2, 6, 7], 3));
// console.log(findMaxSum([2,6,9,2,1,8,5,6,3],3));

function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  let map = {};
  let num1Str = num1.toString();
  let num2Str = num2.toString();
  for (let char of num1Str) {
    map[char] = ++map[char] || 1;
    // console.log(`${char}: ${map[char]}`);
  }
  // console.log(map);
  for (let i = 0; i < num2Str.length; i++) {
    if (map[num2Str[i]]) {
      map[num2Str[i]]--;
    } else {
      return false;
    }
  }
  return true;
}

// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(34, 14));
// console.log(sameFrequency(3589578, 5879385));
// console.log(sameFrequency(22, 222));

function constructNote(msg, letters) {
  // add whatever parameters you deem necessary - good luck!
  let map = {};
  for (let char of letters) {
    map[char] = ++map[char] || 1;
  }
  console.log(map);
  for (let i = 0; i < msg.length; i++) {
    if (map[msg[i]]) {
      --map[msg[i]];
    } else {
      return false;
    }
  }
  return true;
}

// console.log(constructNote("aa", "abc"));
// console.log(constructNote("abc", "dcba"));
// console.log(constructNote("aabbcc", "bcabcaddff"));

function averagePair(arr, avg) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return false;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let currentAvg = (arr[left] + arr[right]) / 2;
    if (currentAvg === avg) {
      return true;
    }
    if (currentAvg < avg) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.

  // one pointer on 1st string to determine which letter we are looking at.
  // 2nd pointer on 2nd string to determine if it is there and subsequent.
  // if both pointers are on the same letter, both move up one.
  // if right is not on same letter as left, then move right up one.
  // return true if left == str1.length
  // return false if right === str2.length and left != str1.length

  let left = 0;
  let right = 0;

  while (right <= str2.length) {
    if (left == str1.length) return true;

    if (str1[left] === str2[right]) {
      left++;
      right++;
    } else {
      right++;
    }
  }
  return false;
}

// console.log(isSubsequence("hello", "hello world")); // true
// console.log(isSubsequence("sing", "sting")); // true
// console.log(isSubsequence("abc", "abracadabra")); // true
// console.log(isSubsequence("abc", "acb")); // false (order matters)

function findPair(arr, target) {
  // put arr into map
  // loop through array
  // target + currentIndex = findValue
  // if map[findValue] return true;
  // if none found throughout the loop, return false.
  console.log("arr:", arr);
  console.log("target:", target);
  let map = {};
  let value = 0;
  console.log(map);
  for (let i = 0; i < arr.length; i++) {
    value = target + arr[i];

    if (map[value]) {
      return true;
    }
    map[arr[i]] = ++map[arr[i]] || 1;
  }
  return false;
}

// console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
// console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
// console.log(findPair([4, -2, 3, 10], -6)); // true
// console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
// console.log(findPair([], 0)); // false
// console.log(findPair([5, 5], 0)); // true
// console.log(findPair([-4, 4], -8)); // true
// console.log(findPair([-4, 4], 8)); // true
// console.log(findPair([1, 3, 4, 6], -2)); // true
// console.log(findPair([0, 1, 3, 4, 6], -2)); // true
// console.log(findPair([5, 3], 5));

function maxSubarraySum(arr, k) {
  if (arr.length < k) return null;
  // add whatever parameters you deem necessary - good luck!
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  let tempSum = sum;

  for (let i = k; i < arr.length; i++) {
    tempSum = tempSum - arr[i - k] + arr[i];
    sum = Math.max(sum, tempSum);
  }
  return sum;
}

// console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null

function minSubArrayLen(arr, target) {
  //initialize 2 pointers, both starting at the same side.
  // add the sum of the initial
  // move left when we are over the target
  // move right when we are under the target
  // return right - left
  if (arr.length < 1) return 0;
  if (arr.length === 1 && arr[0] < target) return 0;
  if (arr.length === 1 && arr[0] >= target) return 1;

  let left = 0;
  let right = 1;
  let sum = arr[left] + arr[right];
  let min = Infinity;
  while (right < arr.length) {
    if (right === arr.length - 1 && left === 0 && sum < target) {
      return 0;
    }
    if (left === right) {
      return 1;
    }
    if (sum >= target) {
      min = Math.min(min, right - left);
      sum -= arr[left];
      left++;
    }
    if (sum < target) {
      right++;
      sum += arr[right];
    }
  }
  return min + 1;
}

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
// console.log(minSubArrayLen([5], 9)); // 0
// console.log(minSubArrayLen([5], 5)); // 1
// console.log(minSubArrayLen([], 5)); // 0

function findLongestSubstring(str) {
  // add whatever parameters you deem necessary - good luck!
  // create set, left and right pointers
  // loop through str
  // if the set has the current character, calculate Math.max then left++
  // if the set doesn't, right++

  if (str.length < 2) return str.length;
  const set = new Set();
  let left = 0;
  let right = 1;
  let max = -Infinity;
  set.add(str[0]);

  while (right < str.length) {
    if (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    } else {
      set.add(str[right]);
      right++;
    }
    max = Math.max(max, right - left);
  }
  return max;
}

// console.log(findLongestSubstring("")); // 0
// console.log(findLongestSubstring("rithmschool")); // 7
// console.log(findLongestSubstring("thisisawesome")); // 6
// console.log(findLongestSubstring("thecatinthehat")); // 7
// console.log(findLongestSubstring("bbbbbb")); // 1
// console.log(findLongestSubstring("longestsubstring")); // 8
// console.log(findLongestSubstring("thisishowwedoit")); // 6

function countZeroes(arr) {
  // add whatever parameters you deem necessary - good luck!!!
  let start = 0;
  let end = arr.length;

  if (arr[0] === 0) return arr.length;
  if (arr[arr.length - 1] === 1) return 0;

  while (start < end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === 1) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return arr.length - start;
}

// console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
// console.log(countZeroes([1, 0, 0, 0, 0])); // 4
// console.log(countZeroes([0, 0, 0])); // 3
// console.log(countZeroes([1, 1, 1, 1])); // 0

function sortedFrequency(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return 0;

  let start = 0;
  let end = arr.length - 1;
  let firstIndex = 0;
  let lastIndex = 0;

  //get first index
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (middle === arr.length - 1 && arr[middle] != num) return -1;

    if (arr[middle] >= num) {
      firstIndex = middle;
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  start = 0;
  end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] <= num) {
      lastIndex = middle;
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  // console.log(firstIndex);
  // console.log(lastIndex);
  return lastIndex - firstIndex + 1;
}

// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1

function findRotatedIndex(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === num) return middle;
    if (arr[middle] >= arr[start]) {
      if (num <= arr[middle] && num >= arr[start]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    } else {
      if (num >= arr[middle] && num <= arr[end]) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
  }
  return -1;
}

// console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
// console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
// console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); // 5

function recursiveFactorial(num) {
  if (num <= 1) return 1;
  return num * recursiveFactorial(--num);
}

// console.log(recursiveFactorial(5));

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60

function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  let result = [];
  if (str.length === 1) return str[0];
  result.push(str[str.length - 1]);

  //console.log(str[str.length - 1]);
  //console.log(str.slice(0, str.length - 1));
  result = result.concat(reverse(str.slice(0, str.length - 1)));
  return result.join("");
}

// console.log(reverse("awesome")); // 'emosewa'
// console.log(reverse("rithmschool")); // 'loohcsmhtir'

function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

// console.log(isPalindrome("awesome")); // false
// console.log(isPalindrome("foobar")); // false
// console.log(isPalindrome("tacocat")); // true
// console.log(isPalindrome("amanaplanacanalpanama")); // true
// console.log(isPalindrome("amanaplanacanalpandemonium")); // false

// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, callback, index = 0) {
  // add whatever parameters you deem necessary - good luck!
  if (index >= arr.length) return false;
  if (callback(arr[index])) return true;

  return someRecursive(arr, callback, ++index);
}

// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
// console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
// console.log(someRecursive([4, 6, 8], isOdd)); // false
// console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

function flatten(arr, index = 0) {
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];
  if (arr.length <= index) return [];
  //console.log(arr);

  if (Array.isArray(arr[index])) {
    newArr = newArr.concat(flatten(arr[index]));
  } else {
    newArr.push(arr[index]);
  }
  return newArr.concat(flatten(arr, ++index));
}

// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1], [2], [3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

// [1, [2, [3, 4], [[5]]]]
// [1].concat([1, [2, [3, 4], [[5]]]], 1)
//   [].concat([2, [3, 4], [[5]]],0)
//     [2].concat([2, [3, 4], [[5]]],1)
//       [].concat([3,4],0)
//         [3].concat([3,4],1)
//           [4].concat([3,4],2)
//             []
//           [4].concat([])
//         [3].concat([4])
//       [].concat([3,4])
//     [2].concat([3,4])
//   [].concat([2,3,4])
// [1].concat([2,3,4])
// [1,2,3,4]
//       [].concat([[5]],0)
//         [].concat([5],0)
//           [5].concat([5],1)
//             []
//           [5].concat([])
//         [].concat([5])
//       [].concat([5])
// [1,2,3,4].concat([5])
// [1,2,3,4,5]

function capitalizeFirst(arr, index = 0) {
  // add whatever parameters you deem necessary - good luck!
  if (index >= arr.length) return [];
  let newArr = [];
  let newStr = arr[index].slice(0, 1);
  newStr = newStr.toUpperCase() + arr[index].slice(1, arr[index].length);
  newArr.push(newStr);

  return newArr.concat(capitalizeFirst(arr, ++index));
}
// let str = "car";
// let newStr = str.slice(0, 1);
// newStr = newStr.toUpperCase() + str.slice(1, str.length);
// console.log(newStr);
// console.log(str);

// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']

function improvedCapitalizeFirst(arr, index = 0) {
  // add whatever parameters you deem necessary - good luck!
  if (index >= arr.length) return [];
  const newStr = arr[index].charAt(0).toUpperCase() + arr[index].slice(1);
  return [newStr, ...improvedCapitalizeFirst(arr, index + 1)];
}

// console.log(improvedCapitalizeFirst(["car", "taco", "banana"]));

function nestedEvenSum(obj, index = 0) {
  let total = 0;
  if (Object.entries(obj).length <= index) return 0;

  let value = Object.values(obj)[index];
  if (typeof value === "number" && value % 2 === 0) {
    total = value;
  } else if (typeof value === "object" && !Array.isArray(value)) {
    total += nestedEvenSum(value);
  }
  return total + nestedEvenSum(obj, index + 1);
}

var evenObj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var evenObj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

// console.log(nestedEvenSum(evenObj1)); // 6
// console.log(nestedEvenSum(evenObj2)); // 10

function capitalizeWords(arr, index = 0) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length <= index) return arr;
  arr[index] = arr[index].toUpperCase();
  return capitalizeWords(arr, index + 1);
}

// let words = ["i", "am", "learning", "recursion"];
// console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

function stringifyNumbers(obj) {
  let result = {};
  if (Object.keys(obj).length === 0) return obj;

  for (let key in obj) {
    //console.log(key);
    if (typeof obj[key] === "number") result[key] = obj[key].toString();
    else if (typeof obj[key] === "object") {
      result[key] = stringifyNumbers(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}

let stringifyObj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

// console.log(stringifyNumbers(stringifyObj));

function collectStrings(obj, index = 0) {
  if (Object.keys(obj).length === index) return [];
  let key = Object.keys(obj)[index];
  let result = [];

  if (typeof obj[key] === "string") {
    result.push(obj[key]);
  } else if (typeof obj[key] === "object") {
    result = result.concat(collectStrings(obj[key]));
  }
  return result.concat(collectStrings(obj, index + 1));
}

const collectObj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

// console.log(collectStrings(collectObj)); // ["foo", "bar", "baz"]
