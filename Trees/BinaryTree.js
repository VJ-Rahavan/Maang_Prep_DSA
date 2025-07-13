// Node structure
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Tree
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert nodes level-wise (like a complete binary tree)
  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    const queue = [this.root];

    while (queue.length > 0) {
      const current = queue.shift();

      if (!current.left) {
        current.left = newNode;
        return;
      } else {
        queue.push(current.left);
      }

      if (!current.right) {
        current.right = newNode;
        return;
      } else {
        queue.push(current.right);
      }
    }
  }

  // Preorder traversal: Root -> Left -> Right
  preorder(node = this.root) {
    if (!node) return;
    console.log(node.value);
    this.preorder(node.left);
    this.preorder(node.right);
  }

  // Inorder traversal: Left -> Root -> Right
  inorder(node = this.root) {
    if (!node) return;
    this.inorder(node.left);
    console.log(node.value);
    this.inorder(node.right);
  }

  // Postorder traversal: Left -> Right -> Root
  postorder(node = this.root) {
    if (!node) return;
    this.postorder(node.left);
    this.postorder(node.right);
    console.log(node.value);
  }
}

const tree = new BinaryTree();

tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

console.log('Inorder:');
tree.inorder();

console.log('Preorder:');
tree.preorder();

console.log('Postorder:');
tree.postorder();
console.log('Check');
