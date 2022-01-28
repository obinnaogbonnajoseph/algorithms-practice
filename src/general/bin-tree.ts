const { solveBinTree: solve } = require('../exports');
import { BinTreeNode, getBinTreeRootNode as getNode } from './data';

// recursive
const treeIncludesRecursive = (root: BinTreeNode, val: number): boolean => {
    if (!root) return false
    if (root.val === val) return true;
    const leftRecursive = treeIncludesRecursive(root.left, val);
    if (!leftRecursive) return treeIncludesRecursive(root.right, val);
    return leftRecursive;
}

// dfs
const treeIncludeDfs = (root: BinTreeNode, val: number) => {
    let includes = false;
    const stack = [root];
    while (stack.length) {
        const cur = stack.pop();
        if (cur) {
            if (cur.val === val) return true;
            if (cur.left !== null) stack.push(cur.left);
            if (cur.right !== null) stack.push(cur.right);
        }
    }
    return includes;
}

// bfs
const treeIncludeBfs = (root: BinTreeNode, val: number) => {
    let includes = false;
    const queue = [root];
    while (queue.length) {
        const cur = queue.shift();
        if (cur) {
            if (cur.val === val) return true;
            if (cur.left !== null) queue.push(cur.left);
            if (cur.right !== null) queue.push(cur.right);
        }
    }
    return includes;
}

const val = 11;
console.log(solve(treeIncludeDfs.bind(null, getNode(), val), treeIncludeBfs.bind(null, getNode(), val), treeIncludesRecursive.bind(null, getNode(), val)))




// Use depth first search to solve binary tree min value
const treeMinValueDFS = (root: BinTreeNode) => {
    let min = Infinity;
    const stack = [root];
    while (stack.length) {
        const current = stack.pop();
        if (current) {
            if (current.val < min) min = current.val
            if (current.left !== null) stack.push(current.left);
            if (current.right !== null) stack.push(current.right);
        }
    }
    return min;
}

// Use breadth first search to solve binary tree min value (Not the most efficient in JavaScript)
const treeMinValueBFS = (root: BinTreeNode) => {
    let min = Infinity;
    const queue = [root];
    while (queue.length) {
        const current = queue.shift(); // shift of array runs in O(n), hence this is O(n2).
        if (current) {
            if (current.val < min) min = current.val
            if (current.left !== null) queue.push(current.left);
            if (current.right !== null) queue.push(current.right);
        }
    }
    return min;
}

const treeMinValueRecursive = (root: BinTreeNode): number => {
    if (root === null) return Infinity;
    return Math.min(root.val, treeMinValueRecursive(root.left), treeMinValueRecursive(root.right))
}


console.log(solve(treeMinValueDFS, treeMinValueBFS, treeMinValueRecursive));


// recursive
const treeSumRecursive = (root: BinTreeNode): number => {
    if (root === null) return 0
    const leftSum = treeSumRecursive(root.left);
    const rightSum = treeSumRecursive(root.right);
    return root.val + leftSum + rightSum;
}

// depth first traversal
const treeSumDFS = (root: BinTreeNode) => {
    const stack = [root];
    let sum = 0;
    while (stack.length) {
        const cur = stack.pop();
        if (cur) {
            sum += cur.val;
            if (cur.left !== null) stack.push(cur.left)
            if (cur.right !== null) stack.push(cur.right)
        }
    }
    return sum;
}

// breadth first traversal
const treeSumBFS = (root: BinTreeNode) => {
    const queue = [root];
    let sum = 0;
    while (queue.length) {
        const cur = queue.shift();
        if (cur) {
            sum += cur.val;
            if (cur.left !== null) queue.push(cur.left)
            if (cur.right !== null) queue.push(cur.right)
        }
    }
    return sum;
}

console.log(solve(treeSumDFS, treeSumBFS, treeSumRecursive))