// Day 17: Data Structures
// Tasks/Activities:
// Activity 1: Linked List
// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.lenght = 1;


  }
  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode;
    this.tail = newNode;
    this.lenght++;
  }
  prepend(value){
    const newNode = new Node(value)
      newNode.next=this.head;
      this.head=newNode
      this.lenght++
  }
  insert(index,value){
    if (index>=this.lenght) {
        return this.append(value)
    }
    const newNode=new Node(value);
    const leader= this.traveseToIndex(index-1);
    const holdingPointer=leader.next;
    leader.next=newNode
    newNode.next=holdingPointer;
    this.lenght++

  }
  traveseToIndex(index){
    let counter=0;
    let currentNode=this.head
    while (counter!==index) {
        currentNode=currentNode.next
        counter++
    }
    return currentNode
  }

  display() {
    // return this;
    const array=[]
    let currentNode=this.head;
    while(currentNode!==null){
        array.push(currentNode.value)
        currentNode=currentNode.next
    }
    return array
  }

remove(index){
   
        const leader=this.traveseToIndex(index-1)
        const unwantedNode=leader.next;
        leader.next=unwantedNode.next;
        this.lenght--;
      
}

}

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(16);
linkedList.prepend(6);
linkedList.insert(2,9)
// console.log(linkedList.display());

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

linkedList.append(5);
linkedList.append(16);
linkedList.prepend(6);
linkedList.insert(2,9)
// console.log(linkedList.display());

// Activity 2: Stack
// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class Stack{
    constructor(...items){
        this.item=[...items]
    }
    push(element){
        this.item.push(element)
    }
    pop(){
        if (this.item.length===0) {
            return "Stack is empty"
        }
        return this.item.pop()

    }
    peek(){
        if (this.item.length===0) {
            console.log("Stack is empty")
        }
        return this.item[this.item.length-1]
    }


    display(){
        return this.item
    }


}

const stack=new Stack(12,23,2)

// console.log(stack.display())
// stack.pop()
// stack.pop()
// stack.pop()
stack.push(34)
// console.log(stack.display())
// console.log(stack.peek())


// Task 4: Use the Stack class to reverse a string by pushing all characters into the stack and then popping them off.

let string='abcdef'
string=string.split('')


const str=new Stack()

string.forEach(element => {
    str.push(element)
});

let reverseStr=[]
for (let i = 0; i < string.length; i++) {
    reverseStr.push(str.pop())    
}

// console.log(reverseStr)


// Activity 3: Queue
// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return the first element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // View the first element in the queue without removing it
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // View all elements in the queue
    printQueue() {
        return this.items.join(", ");
    }
}

const q=new Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(15)
console.log(q.printQueue())
// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    // Add a print job to the queue
    addPrintJob(job) {
        console.log(`Adding print job: ${job}`);
        this.queue.enqueue(job);
    }

    // Process the next print job in the queue
    processPrintJob() {
        if (this.queue.isEmpty()) {
            console.log("No print jobs in the queue.");
        } else {
            const job = this.queue.dequeue();
            console.log(`Processing print job: ${job}`);
        }
    }

    // View the next print job in the queue
    viewNextPrintJob() {
        if (this.queue.isEmpty()) {
            console.log("No print jobs in the queue.");
        } else {
            console.log(`Next print job: ${this.queue.front()}`);
        }
    }
}

// Example usage
const printerQueue = new PrinterQueue();

printerQueue.addPrintJob("Task 1");
printerQueue.addPrintJob("Task 2");
printerQueue.addPrintJob("Task 3");


// Activity 4: Binary Tree
// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.

class TreeNode{
    constructor(value){
                this.value=value;
this.left = null;
        this.right=null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }


    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }


    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}


const binaryTree = new BinaryTree();

binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(12);
binaryTree.insert(18);

console.log("In-order traversal of the binary tree:");
binaryTree.inOrderTraversal(); 


// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
// Activity 5: Graph (Optional)
//Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
// Feature Request:
// 1. Linked List Script: Write a script that implements a linked list with methods to add, remove, and display nodes.
// 2. Stack Script: Create a script that implements a stack and uses it to reverse a string.
// 3. Queue Script: Write a script that implements a queue and simulates a printer queue.
// 4. Binary Tree Script: Create a script that implements a binary tree with insertion and in-order traversal methods.
// 5. Graph Script: Write a script that implements a graph and performs breadth-first search (optional).
// .
