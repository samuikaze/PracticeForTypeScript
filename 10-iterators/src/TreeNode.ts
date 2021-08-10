class TreeNode<T> {
  public leftNode: TreeNode<T> | null = null;
  public rightNode: TreeNode<T> | null = null;
  public parent: TreeNode<T> | null = null;

  constructor(public value: T) {}

  set left(value: T) {
    this.leftNode = new TreeNode(value);

    this.leftNode.parent = this;
  }

  set right(value: T) {
    this.rightNode = new TreeNode(value);

    this.rightNode.parent = this;
  }
}

export default TreeNode;
