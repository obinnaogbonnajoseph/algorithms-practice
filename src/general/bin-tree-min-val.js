const { solveBinTree: solve } = require('../exports');

// Use depth first search to solve binary tree min value
const treeMinValueDFS = (root) => {
    let min = Infinity;
    const stack = [root];
    while (stack.length) {
        const current = stack.pop();
        if (current.val < min) min = current.val
        if (current.left !== null) stack.push(current.left);
        if (current.right !== null) stack.push(current.right);
    }
    return min;
}

// Use breadth first search to solve binary tree min value (Not the most efficient in JavaScript)
const treeMinValueBFS = (root) => {
    let min = Infinity;
    const queue = [root];
    while (queue.length) {
        const current = queue.shift(); // shift of array runs in O(n), hence this is O(n2).
        if (current.val < min) min = current.val
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return min;
}

const treeMinValueRecursive = (root) => {
    if (root === null) return Infinity;
    return Math.min(root.val, treeMinValueRecursive(root.left), treeMinValueRecursive(root.right))
}


console.log(solve(treeMinValueDFS, treeMinValueDFS, treeMinValueRecursive));