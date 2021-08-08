const Stack = function () {
  this.count = 0;
  this.items = {};

  this.push = function (value) {
    this.items[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) {
      return "Empty Stack";
    }

    this.count--;
    let result = this.items[this.count];
    delete this.items[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  this.peek = function () {
    return this.items[this.count - 1];
  };
};

let myStack = new Stack();
console.log("push " + myStack.push(1));
console.log("push " + myStack.push(2));
console.log("push " + myStack.push(3));
console.log("peek " + myStack.peek());
console.log("size " + myStack.size());
console.log("pop " + myStack.pop());
console.log({myStack});
console.log("peek " + myStack.peek());
console.log("pop " + myStack.pop());
console.log({myStack});
console.log("peek " + myStack.peek());
console.log("pop " + myStack.pop());
console.log("peek " + myStack.peek());
