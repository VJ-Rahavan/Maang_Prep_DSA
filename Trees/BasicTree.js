class Node {
  constructor(value) {
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;
  }
}

class BasicTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    let cur = this.root;
    if (this.root === null) {
      this.root = node;
      return;
    }

    while (cur) {
      if (cur.value > value) {
        if (cur.leftNode !== null) {
          cur = cur.leftNode;
        } else {
          cur.leftNode = node;
          break;
        }
        console.log('Hola');
      } else {
        if (cur.rightNode !== null) {
          cur = cur.rightNode;
        } else {
          cur.rightNode = node;
          break;
        }
        console.log('Helo');
      }
    }

    console.log(this.root);
  }

  search(value) {
    let cur = this.root;
    while (cur) {
      if (cur.value === value) {
        console.log(`Value ${value} found successfully!`);
        return true;
      }

      if (cur.value > value) {
        cur = cur.leftNode;
      } else {
        cur = cur.rightNode;
      }
    }
    console.log(`Value ${value} not found`);
    return false;
  }

  //Needs to be implemented
  delete(value) {
    let cur = this.root;
    let par = this.root;
    let isFound = false;
    let active = null;
    while (cur) {
      if (cur.value === value) {
        console.log(`Value ${value} found successfully!`);
        isFound = true;
        break;
      }

      if (cur.value > value) {
        cur = cur.leftNode;
        this.par = cur;
        active = 'leftNode';
      } else {
        cur = cur.rightNode;
        this.par = cur;
        active = 'rightNode';
      }
    }

    if (isFound) {
      if (cur.rightNode && cur.rightNode) {
        console.log('Solution not found');
      } else if (cur.rightNode) {
      } else if (cur.rightNode) {
      } else {
        // par.rightNode = null;
      }
    }

    console.log(this.root);
  }
}

const tree = new BasicTree();

tree.insert(10);
tree.insert(20);
tree.insert(30);

tree.insert(2);
tree.insert(17);

tree.search(19);

tree.delete(30);
