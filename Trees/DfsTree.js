// Define the TreeNode class
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 1. Pre-order DFS: Root → Left → Right
function dfsPreOrder(root) {
  if (!root) return;
  console.log(root.value); // Visit root
  dfsPreOrder(root.left); // Left
  dfsPreOrder(root.right); // Right
}

// 2. In-order DFS: Left → Root → Right
function dfsInOrder(root) {
  if (!root) return;
  dfsInOrder(root.left); // Left
  console.log(root.value); // Visit root
  dfsInOrder(root.right); // Right
}

// 3. Post-order DFS: Left → Right → Root
function dfsPostOrder(root) {
  if (!root) return;
  dfsPostOrder(root.left); // Left
  dfsPostOrder(root.right); // Right
  console.log(root.value); // Visit root
}

// Create a sample binary tree with 3 levels:
//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Call and test all DFS traversals
console.log('Pre-order DFS:');
dfsPreOrder(root); // Output: 1 2 4 5 3 6 7

console.log('In-order DFS:');
dfsInOrder(root); // Output: 4 2 5 1 6 3 7

console.log('Post-order DFS:');
dfsPostOrder(root); // Output: 4 5 2 6 7 3 1
