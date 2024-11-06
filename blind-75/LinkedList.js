class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  size() {
    let current = this.head;
    let count = 0;

    while (current) {
      count++;
      current = current.next;
    }
    console.log(count);
    return count;
  }

  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid error");
    }
    let currentNode = new Node(data);
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode = current.next;
    current.next = newNode;
  }

  removeTop() {
    if (!this.head) {
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedlist = new LinkedList();

linkedlist.addFirst(5);
linkedlist.addFirst(3);
linkedlist.addFirst(9);
linkedlist.size();

linkedlist.print();
