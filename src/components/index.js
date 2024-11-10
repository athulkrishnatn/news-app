// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Node class for individual nodes
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// LinkedList class
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
}

// Create an instance of LinkedList
let myLinkedList = new LinkedList(4);



