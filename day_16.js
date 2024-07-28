// Day 16: Recursion
// Tasks/Activities:
// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

// console.log(factorial(3));
// console.log(factorial(5));

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function fibonacci(number) {
  if (number === 0 || number === 1) {
    return number;
  }

  return fibonacci(number - 1) + fibonacci(number - 2);
}

// Activity 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arraySum(array) {
  if (array.length === 0) {
    return 0;
  }
  return array[0] + arraySum(array.slice(1));
}

// console.log(arraySum([1,2,3]));

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function findMax(array) {
  if (array.length === 0) {
    return 0;
  }
  return array[0] > findMax(array.slice(1))
    ? array[0]
    : findMax(array.slice(1));
}

// console.log(findMax([10,20,30]))
// console.log(findMax(myArray))

// Activity 3: String Manipulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

const name = "subhadip";

function reverseString(str) {
  if (str.length === 0) {
    return "";
  }
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}
// console.log(reverseString("i love code"))

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("level"));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("a"));
// console.log(isPalindrome(""));

// Activity 4: Recursive Search
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

const Array = [47, 78, 56, 34, 23, 45, 67, 78, 87, 20, 34, 50];

const array = Array.sort();

const binarySearch = (array, target, low = 0, high = array.length - 1) => {
  if (low > high) {
    return -1;
  }
  const mid = Math.floor((low + high) / 2);
  if (array[mid] === target) {
    return mid;
  } else if (array[mid] > mid) {
    return binarySearch(array, target, low, mid - 1);
  } else {
    return binarySearch(array, target, mid + 1, high);
  }
};

// console.log(binarySearch(array,47))

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function countElements(array, target) {
  if (array.length === 0) {
    return 0;
  }
  let count=array[0]===target?1:0;
  return count +countElements(array.slice(1),target)

}

console.log(countElements([1, 2, 3, 4, 1, 2, 1], 1));
console.log(countElements([5, 5, 5, 5, 5], 5));

// Activity 5: Tree Traversal (Optional)
// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited. Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

function calculateDepth(node) {
    if (node === null) {
        return 0;
    }
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

console.log("Depth of the tree:");
console.log(calculateDepth(root)); 

const singleNodeTree = new TreeNode(1);
console.log(calculateDepth(singleNodeTree)); 

const emptyTree = null;
console.log(calculateDepth(emptyTree)); 

const deeperTree = new TreeNode(1);
deeperTree.left = new TreeNode(2);
deeperTree.left.left = new TreeNode(3);
deeperTree.left.left.left = new TreeNode(4);
console.log(calculateDepth(deeperTree)); 


// Feature Request:
// 1. Factorial and Fibonacci Script: Write a script that includes recursive functions to calculate the factorial and Fibonacci numbers.
// 2. Array Recursion Script: Create a script that includes recursive functions to find the sum and maximum element of an array.
// 3. String Recursion Script: Write a script that includes recursive functions to reverse a string and check if a string is a palindrome. Recursive Search Script: Create a script that includes recursive functions for binary search and counting occurrences in an array.
// 4. 5. Tree Traversal Script: Write a script that includes recursive functions for in-order traversal and depth calculation of a binary tree (optional).
