// Day 22: LeetCode Medium
// Tasks/Activities:
// Activity 1: Add Two Numbers
// Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// • Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.



function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var addTwoNumbers = function(l1, l2) {
    let result=new ListNode();
    let carry=0
    let p=l1,q=l2,current=result
    while (p!==null || q!==null) {
        let x=(p!==null)? p.val :0
        let y=(q!==null)? q.val :0
        let sum =x+y+carry
        carry=Math.floor(sum/10)
        current.next=new ListNode(sum%10)
        current=current.next


        if(p!==null)p=p.next
        if(q!==null)q=q.next
    }
    if (carry>0)current.next=new ListNode(carry)
        return result.next

};

// // Example usage:
// const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// const result = addTwoNumbers(l1, l2);

// // To print the result
// let node = result;
// while (node !== null) {
//     console.log(node.val);
//     node = node.next;
// }




// Create a few test cases with linked lists and log the sum as a linked list.
// Activity 2: Longest Substring Without Repeating Characters
// Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode. Write a function that takes a string and returns the length of the longest substring without repeating characters.


var lengthOfLongestSubstring = function(s) {
    let start = 0; // Start index of the current window
    let maxLength = 0; // Maximum length of substring without repeating characters
    let charSet = new Set(); // Set to track characters in the current window

    for (let end = 0; end < s.length; end++) {
        // If character is already in the set, remove characters from the start
        while (charSet.has(s[end])) {
            charSet.delete(s[start]);
            start++;
        }
        
        // Add the current character to the set
        charSet.add(s[end]);
        // Update the maximum length
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};

// Example usage
console.log(lengthOfLongestSubstring('abcabacddd')); // Output should be 3 (substring "abc")


//Log the length for a few test cases, including edge cases.
// Activity 3: Container With Most Water
// Task 3: Solve the "Container With Most Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.

var maxArea = function(height) {
    let maxArea=0;
    let left=0;
    let right=height.length -1

    while(left<right)
    {
        maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]));

        if(height[left]<height[right]) left ++
        else right--

       
    }


 return maxArea
};



// Log the maximum amount of water for a few test cases.
// Activity 4: 3Sum
// Task 4: Solve the "3Sum" problem on LeetCode.
// • Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.


var threeSum = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let total = nums[i] + nums[j] + nums[k];

            if (total > 0) {
                k--;
            } else if (total < 0) {
                j++;
            } else {
                res.push([nums[i], nums[j], nums[k]]);
                j++;

                while (nums[j] === nums[j-1] && j < k) {
                    j++;
                }
            }
        }
    }
    return res;    
};

// Log the triplets for a few test cases, including edge cases.
// Activity 5: Group Anagrams
// Task 5: Solve the "Group Anagrams" problem on LeetCode.
// • Write a function that takes an array of strings and groups anagrams together.
var getSignature = function(s) {
    const count = Array(26).fill(0);
    for (const c of s) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const result = [];
    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) {
            result.push(String.fromCharCode(i + 'a'.charCodeAt(0)), count[i].toString());
        }
    }

    return result.join('');
};



var groupAnagrams = function(strs) {
    const result = [];
    const groups = new Map();

    for (const s of strs) {
        const signature = getSignature(s);
        if (!groups.has(signature)) {
            groups.set(signature, []);
        }
        groups.get(signature).push(s);
    }

    groups.forEach(value => result.push(value));

    return result;
};


// • Log the grouped anagrams for a few test cases.