// PRIORITY QUEUE
// Not only pass the value but also its priority(number).
// Higher the priority, ahead in the queue.
// If values have same priority, it behaves like a normal queue.

function PriorityQueue() {
  this.queue = [];

  this.print = function () {
    return console.log(this.queue);
  };

  this.enqueue = function (value, priority) {
    this.queue.push({
      value: value,
      priority: priority,
    });
  };

  this.dequeue = function () {
    var min = this.queue[0];
    for (var i = 1; i < this.queue.length; i++) {
      if (this.queue[i].priority < min.priority) {
        min = this.queue[i];
      }
    }
    this.queue.splice(this.queue.indexOf(min), 1);
    return console.log(min.value);
  };

  this.peek = function () {
    return console.log(this.queue[0].value);
  };

  this.isEmpty = function () {
    return this.queue.length === 0;
  };

  this.size = function () {
    return this.queue.length;
  };

  this.clear = function () {
    this.queue = [];
  };

  this.remove = function (value) {
    var index = this.queue.indexOf(value);
    this.queue.splice(index, 1);
  };

  this.removeAll = function () {
    this.queue = [];
  };

  this.removeAt = function (index) {
    this.queue.splice(index, 1);
  };
}

let pq = new PriorityQueue();
pq.enqueue(1, 1);
pq.enqueue(2, 2);
pq.enqueue(2, 2);
pq.enqueue(3, 3);
pq.enqueue(4, 4);
pq.print();
pq.dequeue();
pq.print();
pq.peek();
pq.dequeue();
pq.peek();
pq.print();