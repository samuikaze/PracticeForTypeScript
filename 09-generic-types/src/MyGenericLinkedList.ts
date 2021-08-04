import GenericLinkedListNode from "./GenericLinkedListNode";

class GenericLinkedList<T> implements ILinkedList.LinkedList<T> {
  public head: ILinkedList.LinkedListNode<T> | null = null;

  public length() {
    if (this.head === null) {
      return 0;
    }

    let count = 0;
    let currentNode: ILinkedList.LinkedListNode<T> | null = this.head;

    while (currentNode !== null) {
      currentNode = currentNode.next;
      count++;
    }

    return count;
  }

  public at(index: number): ILinkedList.LinkedListNode<T> | null {
    const length = this.length();

    if (index >= length) {
      throw new Error('Index out of bound');
    }

    let currentIndex = 0;
    let currentNode = <ILinkedList.LinkedListNode<T>>this.head;
    while (currentIndex !== index) {
      currentNode = <ILinkedList.LinkedListNode<T>>currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }

  public insert(index: number, value: T) {
    const length = this.length();
    const newNode = new GenericLinkedListNode(value);

    if (length < index) {
      throw new Error('Index out of bound');
    } else if (length === index) {
      if (index === 0) {
        this.head = newNode;
      } else {
        const node = <ILinkedList.LinkedListNode<T>>this.at(index - 1);
        node.next = newNode;
      }
    } else {
      if (index === 0) {
        const originalHead = this.head;
        this.head = newNode;
        this.head.next = originalHead;
      } else {
        const prevNode = <ILinkedList.LinkedListNode<T>> this.at(index - 1);
        const originalNode = <ILinkedList.LinkedListNode<T>> prevNode.next;
        prevNode.next = newNode;
        newNode.next = originalNode;
      }
    }
  }

  public remove(index: number): void {
    throw new Error('Method not implemented');
  }

  public getInfo() {
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null) {
      console.log(`Index ${currentIndex}: ${currentNode.value}`);
      currentNode = currentNode.next;
      currentIndex++;
    }
  }
}

export default GenericLinkedList;
