// Day 21: LeetCode Easy
// Tasks/Activities:
// Activity 1: Two Sum
// Task 1: Solve the "Two Sum" problem on LeetCode.
// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.

const twoSum = function(nums, target) {
    let sum=0

    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            sum=nums[i]+nums[j]
            if (sum===target) {
                return [i,j]
            }
        }
    }

};
//Log the indices for a few test cases.

// console.log(twoSum([1,2,3,4,5,6,7,8,9],8))
// console.log(twoSum([1,2,3,4,5,6,7,8,9],4))
// console.log(twoSum([1,2,3,4,5,6,7,8,9],5))
// console.log(twoSum([1,2,3,4,5,6,7,8,9],13))


// Activity 2: Reverse Integer
// Task 2: Solve the "Reverse Integer" problem on LeetCode.

var reverse = function(x) {
    let reverseInteger = 0;
    let isNegative = x < 0;
    x = Math.abs(x);

    while (x > 0) {
        let reminder = x % 10;
        reverseInteger = reverseInteger * 10 + reminder;
        x = Math.floor(x / 10);
    }

    if (isNegative) {
        reverseInteger *= -1;
    }

    // if (reverseInteger > 2**31 - 1 || reverseInteger < -2**31) {
    //     return 0;
    // }

    return reverseInteger;
};




//Write a function that takes an integer and returns it with its digits reversed.
//Handle edge cases like negative numbers and numbers ending in zero.
//Log the reversed integers for a few test cases.
// Activity 3: Palindrome Number
// Task 3: Solve the "Palindrome Number" problem on LeetCode.
// • Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// • Log the result for a few test cases, including edge cases like negative numbers.
var isPalindrome = function(x) {
    if (x<0) return  false
    if (x>2**31 -1) return  false

    const originalNumber=x
let reverseInteger=0;    
  while (x > 0) {
        let reminder = x % 10;
        reverseInteger = reverseInteger * 10 + reminder;
        x = Math.floor(x / 10);
    }
if(reverseInteger===originalNumber) return true
else return false

};

// Activity 4: Merge Two Sorted Lists
// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// • Write a function that takes two sorted linked lists and returns a new sorted list by merging them.

var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    if(list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};


// • Create a few test cases with linked lists and log the merged list.
// Activity 5: Valid Parentheses
// Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// • Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid. • A string is valid if open brackets are closed in the correct order.
// • Log the result for a few test cases.

var isValid = function(s) {
    let stack = []; 
   for (let c of s) {
       if (c === '(' || c === '{' || c === '[') { 
           stack.push(c); 
       } else { 
           if (!stack.length || (c === ')' && stack[stack.length - 1] !== '(') || 
               (c === '}' && stack[stack.length - 1] !== '{') ||
               (c === ']' && stack[stack.length - 1] !== '[')) {
               return false; 
           }
           stack.pop(); 
       }
   }
   return !stack.length; 
};


console.log(isValid('()'))
console.log(isValid('(){}'))
console.log(isValid('(){]'))

