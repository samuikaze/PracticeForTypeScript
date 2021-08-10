import BinaryTree from "./BinaryTree";
import MyArray from "./MyArray";
import TreeNode from "./TreeNode";

let aCollection = new MyArray<number>([1, 2, 3, 4, 5]);

let anIterator = aCollection.createIterator();

function foreach<T>(iter: IIterates.Iterator<T>, callback: (v: T) => void) {
  while (! iter.isDone()) {
    callback(iter.currentItem as T);
    iter.next();
  }
}

while (! anIterator.isDone()) {
  console.log(`Iterated value: ${anIterator.currentItem}`);
  anIterator.next();
}

try {
  anIterator.next();
} catch (error) {
  console.log('Out of bound error caught!');
}

type TN = TreeNode<number>;

const root = new TreeNode(1);
const aBTree = new BinaryTree(root);

root.left = 2;
(root.leftNode as TN).left = 3;
(root.leftNode as TN).right = 4;
((root.leftNode as TN).rightNode as TN).left = 5;

root.right = 6;
(root.rightNode as TN).left = 7;
((root.rightNode as TN).leftNode as TN).left = 8;
((root.rightNode as TN).leftNode as TN).right = 9;
(((root.rightNode as TN).leftNode as TN).rightNode as TN).left = 10;

console.log('一般手法:');
const valueCumulation1: Array<number> = [];

aBTree.preorderTraversal(n => valueCumulation1.push(n.value));
console.log(valueCumulation1);

console.log('多型尋訪:');
const valueCumulation2: Array<number> = [];
const aBTreeIter = aBTree.createIterator();

foreach(aBTreeIter, v => valueCumulation2.push(v));
console.log(valueCumulation2);
