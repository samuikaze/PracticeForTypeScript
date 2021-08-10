import NormalIterator from "./NormalIterator";

class MyArray<T> implements IIterates.Iterable<T> {
  constructor(public items: Array<T>) {}

  createIterator() {
    return new NormalIterator<T>(this.items);
  }
}

export default MyArray;
