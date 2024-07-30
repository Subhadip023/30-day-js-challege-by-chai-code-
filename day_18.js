// Day 18: Algorithms
// Tasks/Activities:
// Activity 1: Sorting Algorithms
// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function bubble(array) {
    let temp;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-1; j++) {
            if (array[j]>array[j+1]) {
                temp=array[j]
                array[j]= array[j+1]
                array[j+1]=temp;
            }

        }        
    }

    return array;
}

let myArray=[23,21,34,5,9,2,1]
// console.log(bubble(myArray))

//Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        // Find the minimum element in the unsorted portion of the array
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted portion
        if (minIndex !== i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }

    return array;
}

// Example usage
let array = [64, 25, 12, 22, 11];
let sortedArray = selectionSort(array);
// console.log(sortedArray); 


// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array[array.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
// console.log(quickSort(array));


// Activity 2: Searching Algorithms
// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

const linearSearch=(array,target)=>{
    for (let i = 0; i < array.length; i++) {
        if (array[i]===target) {
            return i
        }        
    }
    return -1 
}


// console.log(linearSearch(myArray,34))
// console.log(myArray[2])

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] === target) {
            return mid; 
        } else if (array[mid] < target) {
            start = mid + 1; 
        } else {
            end = mid - 1; 
        }
    }

    return -1;
 }
// console.log(binarySearch(selectionSort(myArray),34))



// Activity 3: String Algorithms
// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

function countCharacterOccurrences(str) {
    const counts = {};

    for (let char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }

    return counts;
}

let string = "helow i am subhadip";
let characterCounts = countCharacterOccurrences(string);
console.log(characterCounts); 




// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

function longestSubstringWithoutRepeating(str) {
    let maxLength = 0;
    let start = 0;
    const seenChars = {};

    for (let end = 0; end < str.length; end++) {
        let char = str[end];

        if (seenChars[char] !== undefined && seenChars[char] >= start) {
            start = seenChars[char] + 1;
        }

        seenChars[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

let string2 = "abcabcbb";
let lengthOfLongestSubstring = longestSubstringWithoutRepeating(string2);
console.log(lengthOfLongestSubstring); 


// Activity 4: Array Algorithms
// Task 8: Write a function to rotate an array by k positions. Log the rotated array.

function rotateArray(array, k) {
    k = k % array.length; // Ensure k is within the bounds of the array length
    let rotatedArray = array.slice(-k).concat(array.slice(0, -k));
    return rotatedArray;
}

// Example usage
let array1 = [1, 2, 3, 4, 5];
let k = 2;
let rotatedArray = rotateArray(array1, k);
console.log(rotatedArray); 


// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
}

let array2 = [1, 3, 5];
let array3 = [2, 4, 6];
let mergedArray = mergeSortedArrays(array2, array3);
console.log(mergedArray); 



// Activity 5: Dynamic Programming (Optional)
// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
// Feature Request:
// 1. Sorting Algorithm Script: Write a script that implements bubble sort, selection sort, and quicksort algorithms to sort arrays. 2. Searching Algorithm Script: Create a script that implements linear search and binary search algorithms to find values in arrays.
// 3. String Algorithm Script: Write a script that counts character occurrences and finds the longest substring without repeating characters.
// 4. Array Algorithm Script: Create a script that rotates arrays and merges sorted arrays.
// 5. Dynamic Programming Script: Write a script that solves the Fibonacci sequence and knapsack problem using dynamic programming (optional).