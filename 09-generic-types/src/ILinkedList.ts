declare namespace ILinkedList {
  export interface LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null;
  }

  export interface LinkedList<U> {
    head: LinkedListNode<U> | null;
    length(): number;
    at(index: number): LinkedListNode<U> | null;
    insert(index: number, value: U): void;
    remove(index: number): void;
  }
}
