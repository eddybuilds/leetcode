// http://cslibrary.stanford.edu/110/BinaryTrees.html

import { Node, insert, newNode, lookup } from "./binarySearchTree.js"

let tree = null;

function generateRandomTree(size) {
  let tree = null;

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  for (let i = 0; i < size; i++) {
    tree = insert(tree, getRandomInt(100));
  }

  return tree;
}

// EXERCISE 1

/*
    2
   / \
  1   3
*/

tree = insert(null, 2);
tree = insert(tree, 1);
tree = insert(tree, 3);
// console.log(tree);

tree = new Node(2, new Node(1, null, null), new Node(3, null, null));
// console.log(tree);

// EXERCISE 2

function traverse(tree) {
  
}

tree = generateRandomTree(15);

