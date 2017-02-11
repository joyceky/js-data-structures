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
myLinkedList.addToHead("Third Node");
// console.log(myLinkedList);

LinkedList.prototype.addToTail = function (value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) {
    this.tail.next = newNode;
  }
  else {
    this.head =  newNode;
  }
  this.tail = newNode;
};

myLinkedList.addToTail("Fourth Node");
myLinkedList.addToTail("Fifth Node");
myLinkedList.addToTail("Sixth Node");
// console.log(myLinkedList);

LinkedList.prototype.removeHead = function () {
  if(!this.head) {
    return null;
  }
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  }
  else {
    this.tail = null;
  }
  return val;
};

// console.log(myLinkedList);
// myLinkedList.removeHead();
// console.log(myLinkedList);
// myLinkedList.removeHead();
// console.log(myLinkedList);

LinkedList.prototype.removeTail = function() {
  if(!this.tail) {
    return null;
  }
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if(this.tail) {
    this.tail.next = null;
  }
  else {
    this.head = null;
  }
  return val;
};

// console.log(myLinkedList);
// myLinkedList.removeTail();
// console.log(myLinkedList);
