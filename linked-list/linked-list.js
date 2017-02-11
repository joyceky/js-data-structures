'use strict';

// Linked List Constructor
function LinkedList() {
  this.head = null;
  this.tail = null;
}

// Node Constructor
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

var myLinkedList = new LinkedList();
console.log(myLinkedList);

// Push
LinkedList.prototype.addToHead = function (value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) {
    this.head.prev = newNode;
  }
  else {
    this.tail = newNode;
  }
  this.head = newNode;
};

myLinkedList.addToHead("First Node");
myLinkedList.addToHead("Second Node");
console.log(myLinkedList);
