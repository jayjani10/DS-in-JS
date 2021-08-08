const Stack = function() {
    this.count = 0;
    this.items = {};

    this.push = function(value) {
        this.count++;
        this.items[this.count] = value;
        return this.items[this.count];
    }

    this.pop = function() {
        if(this.count === 0) {
            return 'Empty Stack';
        }

        this.count--;
        // this.count+1 to show popped element 
        return this.items[this.count+1];
    }

    this.size = function() {
        return this.count;
    }

    this.peek = function() {
        return this.items[this.count];
    }
}

const myStack = new Stack();
console.log('push ' +myStack.push(1));
console.log('push ' +myStack.push(2));
console.log('push ' +myStack.push(3));
console.log('peek ' +myStack.peek());
console.log('size '+ myStack.size());
console.log('pop ' +myStack.pop());
console.log('peek ' +myStack.peek());
