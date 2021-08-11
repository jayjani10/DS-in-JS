// Queue - First In First Out       o - o - o - o - o - o - o->
//                                  6   5   4   3   2   1   0->

function Queue() {
    let items = [];
    
    this.display = function() {
        return items;
    }

    this.enque = function(item) {
        return items.push(item);
    }

    this.deque = function() {
        return items.shift();
    }

    this.front = function() {
        return items[0];
    }

    this.size = function() {
        return items.length;
    }

    this.isEmpty = function() {
        return (items.length === 0);
    }
}

let q = new Queue();
console.log(q.enque(0));
console.log(q.enque(1));
console.log(q.enque(2));
console.log(q.display());
console.log(q.deque());
console.log(q.front());
console.log(q.size());
console.log(q.isEmpty());
