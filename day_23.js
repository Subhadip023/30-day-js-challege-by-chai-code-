// Day 23: LeetCode Hard
// Tasks/Activities:
// Activity 1: Median of Two Sorted Arrays
// Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// • Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
function findMedianSortedArrays(nums1, nums2) {
  // Ensure nums1 is the smaller array
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const x = nums1.length;
  const y = nums2.length;
  let low = 0;
  let high = x;

  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2);
    const partitionY = Math.floor((x + y + 1) / 2) - partitionX;

    const maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const minX = partitionX === x ? Infinity : nums1[partitionX];

    const maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    const minY = partitionY === y ? Infinity : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      if ((x + y) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2];
// console.log(findMedianSortedArrays(nums1, nums2));

// • Log the median for a few test cases, including edge cases.
// Activity 2: Merge k Sorted Lists
// Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// • Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeKLists = function (lists) {
  if (lists.length == 0) {
    return null;
  }

  while (lists.length > 1) {
    let list1 = lists.shift();
    let list2 = lists.shift();

    let merged = mergeFn(list1, list2);
    lists.push(merged);
  }

  return lists[0];
};

function mergeFn(list1, list2) {
  let dummy = new ListNode(0);
  let head = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      dummy.next = list1;
      list1 = list1.next;
    } else {
      dummy.next = list2;
      list2 = list2.next;
    }

    dummy = dummy.next;
  }

  if (list1 == null) {
    dummy.next = list2;
  } else {
    dummy.next = list1;
  }

  return head.next;
}

// • Create a few test cases with linked lists and log the merged list.
// Activity 3: Trapping Rain Water
// Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
// • Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining. Log the amount of trapped water for a few test cases.

var trap = function (height) {
  let l = 0;
  let r = height.length - 1;
  let rm = height[r];
  let lm = height[l];
  let water = 0;
  while (l < r) {
    if (lm < rm) {
      l++;
      lm = Math.max(lm, height[l]);
      water += lm - height[l];
    } else {
      r--;
      rm = Math.max(rm, height[r]);
      water += rm - height[r];
    }
  }

  return water;
};

// Activity 4: N-Queens
// Task 4: Solve the "N-Queens" problem on LeetCode.
// Write a function that places n queens on an nxn chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle. Log the distinct solutions for a few test cases.

function solveNQueens(n) {
  const results = [];
  const board = Array.from({ length: n }, () => Array(n).fill('.'));

  function isValid(board, row, col) {
      // Check the same column
      for (let i = 0; i < row; i++) {
          if (board[i][col] === 'Q') return false;
      }

      // Check the upper left diagonal
      for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
          if (board[i][j] === 'Q') return false;
      }

      // Check the upper right diagonal
      for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
          if (board[i][j] === 'Q') return false;
      }

      return true;
  }

  function backtrack(row) {
      if (row === n) {
          // Copy the board to results
          results.push(board.map(r => r.join('')));
          return;
      }

      for (let col = 0; col < n; col++) {
          if (isValid(board, row, col)) {
              board[row][col] = 'Q';
              backtrack(row + 1);
              board[row][col] = '.'; // Backtrack
          }
      }
  }

  backtrack(0);
  return results;
}


// Activity 5: Word Ladder
// Task 5: Solve the "Word Ladder" problem on LeetCode.
// Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
// Log the length of the shortest transformation sequence for a few test cases.
var ladderLength = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) {
      return 0
  }

  const wordSet = new Set(wordList)
  const queue = [beginWord]
  const dp = {}
  dp[beginWord] = 1

  while (queue.length) {
      const currentWord = queue.shift()
      for (let i = 0; i < currentWord.length; i++) {
          let wordArray = currentWord.split('')
          for (let j = 0; j < 26; j++) {
              wordArray[i] = String.fromCharCode(97 + j)
              const newWord = wordArray.join('')

              if (!dp.hasOwnProperty(newWord) && wordSet.has(newWord)) {
                  dp[newWord] = dp[currentWord] + 1
                  if (newWord === endWord) {
                      return dp[newWord]
                  } else {
                      queue.push(newWord)
                  }
              }
          }
      }
  }
  return 0
};