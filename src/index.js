class Sorter {
  constructor() {
    // your implementation
    this.store = [];
    this.compareFunction = this.defaultNC;
  }

  defaultNC(a,b)
  {
    return a-b;
  }
  add(element) {
    // your implementation
    this.store.push(element);
  }

  at(index) {
    // your implementation
    return this.store[index];
  }

  get length() {
    // your implementation
    return this.store.length;
  }

  toArray() {
    // your implementation
    return this.store;
  }

  sort(indices) {
    // your implementation
    indices = indices.sort(this.defaultNumbersCompare);
 let sortedArray = this.store.filter((item, index) => {
     if (indices.some((element) => {
             return index===element
         })
     ) {
         return true;
     }
 }).sort(this.compareFunction);

 indices.forEach((item, index) => {
     this.store[item] = sortedArray[index];
 });
  }

  setComparator(compareFunction) {
    // your implementation
      this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
