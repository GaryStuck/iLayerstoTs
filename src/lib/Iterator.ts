function *makeIterator(arr: Array<number>) {
  for (let i =0;i<arr.length;i++) {
    yield arr[i]
  }
}

const gen = makeIterator([0,1,2,3])
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().done);
