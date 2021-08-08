// SETS - same as array without duplicate items

function customSet() {
  let arr = [];

  this.has = function (value) {
    return arr.indexOf(value) !== -1;
  };

  this.values = function () {
    return arr;
  };

  this.add = function (value) {
    if (!this.has(value)) {
      arr.push(value);
      return true;
    }
    return false;
  };

  this.remove = function (value) {
    if (!this.has(value)) {
      return false;
    }
    let idx = arr.indexOf(value);
    arr.splice(index, 1);
    return true;
  };

  this.size = function () {
    return arr.length;
  };

  this.union = function (otherSet) {
    let unionSet = new customSet();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach((e) => unionSet.add(e));
    secondSet.forEach((e) => unionSet.add(e));

    return unionSet;
  };

  this.intersection = function(otherSet) {
      let integrationSet = new customSet();
      let firstSet = this.values();
      firstSet.forEach(e => {
          if(otherSet.has(e)) integrationSet.add(e);
      });
      return integrationSet;
  }

  this.difference = function(otherSet) {
    let differenceSet = new Set();
    let firstSet = this.values();
    firstSet.forEach(e => {
        if(!otherSet.has(e)) differenceSet.add(e);
    })
  }

  this.subset = function(otherSet) {
    let firstSet = this.values();
    return firstSet.every((e) => otherSet.has(e));
  }
}

let setA =  new customSet();
let setB =  new customSet();
setA.add(1);
setA.add(1);
setA.add(2);
setB.add(1);
setB.add(3);
console.log(`setA = ${setA.values()}, setB = ${setB.values()}`);
console.log(setA.union(setB).values());
console.log(setA.intersection(setB).values());