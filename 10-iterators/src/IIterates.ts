declare namespace IIterates {
  export interface Iterator<T> {
    next(): void;
    isDone(): boolean;
    currentItem: T | null;
  }

  export interface Iterable<T> {
    createIterator(): Iterator<T>;
  }
}
