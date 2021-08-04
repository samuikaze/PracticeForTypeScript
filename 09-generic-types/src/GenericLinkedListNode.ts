class GenericLinkedListNode<T> implements ILinkedList.LinkedListNode<T> {
  public next: ILinkedList.LinkedListNode<T> | null = null;

  constructor(public value: T) {}
}

export default GenericLinkedListNode;
