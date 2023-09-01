/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0;
  }
  if (words.length === 1) {
    return words[0].length;
  }
  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) {
    return "";
  }
  if (str.length === 1) {
    return str;
  }
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) return true;
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) return -1;
  if (arr[0] === val) return 0;
  let indexInSlicedArray = findIndex(arr.slice(1), val);
  if (indexInSlicedArray === -1) {
    return -1;
  } else {
    return indexInSlicedArray + 1;
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";
  if (str.length === 1) return str;
  return revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];
  if (Object.keys(obj).length === 0) return result;
  for (let item in obj) {
    if (typeof obj[item] === "string") {
      result.push(obj[item]);
    } else if (typeof obj[item] === "object" && obj[item] !== null) {
      result = result.concat(gatherStrings(obj[item]));
    }
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  let middleIdx = Math.floor((low + high) / 2);
  if (arr[middleIdx] === val) return middleIdx;
  if (arr[middleIdx] > val) {
    return binarySearch(arr, val, low, middleIdx - 1);
  }
  if (arr[middleIdx] < val) {
    return binarySearch(arr, val, middleIdx + 1, high);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
