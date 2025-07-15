// Define the TreeNode class
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BFS function for tree traversal
function bfs(root) {
  if (!root) return;

  const queue = [root];

  console.log('BFS Traversal Output:');
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current.value);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
}

// Create a test binary tree with 3 levels
//        1
//      /   \
//     2     3
//    / \   / \
//   4   5 6   7

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Call BFS
bfs(root);
