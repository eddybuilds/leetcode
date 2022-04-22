// http://cslibrary.stanford.edu/110/BinaryTrees.html

export {
  Node,
  newNode,
  insert,
  lookup
}

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function newNode(value) {
  return new Node(value, null, null);
}

function insert(node, data) {
  if (node == null) {
    return newNode(data);
  }

  if (data <= node.data) {
    node.left = insert(node.left, data);
  } 
  else {
    node.right = insert(node.right, data);
  }

  return node;
}

function lookup(node, target) {
  if (node == null) {
    return false;
  }

  if (target == node.data) {
    return true;
  }

  if (target < node.data) {
    return lookup(node.left, target);
  }
  else {
    return lookup(node.right, target);
  }
}

let root = new Node(9, new Node(4, null, null), new Node(11, null, null));

// console.log(root);
/*
Node {
  data: 9,
  left: Node { data: 4, left: null, right: null },
  right: Node { data: 11, left: null, right: null }
}
*/

// console.log(insert(root, 3));
/*
Node {
  data: 9,
  left: Node {
    data: 4,
    left: Node { data: 3, left: null, right: null },
    right: null
  },
  right: Node { data: 11, left: null, right: null }
}
*/

// console.log(lookup(root, 3));
/*
true
*/