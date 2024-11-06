class Stack {
  constructer() {
    this.items = [];
  }

  push(number) {
    this.items.push(number);
  }

  pop() {
    if (this.items.length === 0) {
      return "Stack is empty";
    }
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}

let myStack = new Stack();
myStack.push(5);
console.log(myStack);
