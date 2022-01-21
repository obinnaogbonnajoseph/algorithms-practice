const { solveBinTree: solve } = require('../exports');

// recursive
const treeSumRecursive = (root) => {
    if (root === null) return 0
    const leftSum = treeSumRecursive(root.left);
    const rightSum = treeSumRecursive(root.right);
    return root.val + leftSum + rightSum;
}

// depth first traversal
const treeSumDFS = (root) => {
    const stack = [root];
    let sum = 0;
    while (stack.length) {
        const cur = stack.pop();
        sum += cur.val;
        if (cur.left !== null) stack.push(cur.left)
        if (cur.right !== null) stack.push(cur.right)
    }
    return sum;
}

// breadth first traversal
const treeSumBFS = (root) => {
    const queue = [root];
    let sum = 0;
    while (queue.length) {
        const cur = queue.shift();
        sum += cur.val;
        if (cur.left !== null) queue.push(cur.left)
        if (cur.right !== null) queue.push(cur.right)
    }
    return sum;
}

console.log(solve(treeSumDFS, treeSumBFS, treeSumRecursive))