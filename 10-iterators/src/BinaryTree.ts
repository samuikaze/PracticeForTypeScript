import NormalIterator from "./NormalIterator";
import TreeNode from "./TreeNode";

class BinaryTree<T> implements IIterates.Iterable<T> {
  constructor(public root: TreeNode<T>) {}

  public preorderTraversal(callback: (el: TreeNode<T>) => void) {
    this.preorderRecursive(this.root, callback);
  }

  private preorderRecursive(
    node: TreeNode<T>,
    callback: (el: TreeNode<T>) => void
  ) {
    callback(node);
    if (node.leftNode !== null) {
      this.preorderRecursive(node.leftNode, callback);
    }

    if (node.rightNode !== null) {
      this.preorderRecursive(node.rightNode, callback);
    }
  }

  public createIterator() {
    const elements: Array<T> = [];

    this.preorderTraversal(node => {
      elements.push(node.value);
    });

    return new NormalIterator(elements);
  }
}

export default BinaryTree;
