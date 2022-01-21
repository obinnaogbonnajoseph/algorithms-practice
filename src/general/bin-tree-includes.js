const { solveBinTree: solve } = require('../exports');
const getNode = require('./bin-tree-data')

// recursive
const treeIncludesRecursive = (root, val) => {
    if (!root) return false
    if (root.val === val) return true;
    const leftRecursive = treeIncludesRecursive(root.left, val);
    if (!leftRecursive) return treeIncludesRecursive(root.right, val);
    return leftRecursive;
}

// dfs
const treeIncludeDfs = (root, val) => {
    let includes = false;
    const stack = [root];
    while (stack.length) {
        const cur = stack.pop();
        if (cur.val === val) return true;
        if (cur.left !== null) stack.push(cur.left);
        if (cur.right !== null) stack.push(cur.right);
    }
    return includes;
}

// bfs
const treeIncludeBfs = (root, val) => {
    let includes = false;
    const queue = [root];
    while (queue.length) {
        const cur = queue.shift();
        if (cur.val === val) return true;
        if (cur.left !== null) queue.push(cur.left);
        if (cur.right !== null) queue.push(cur.right);
    }
    return includes;
}

const val = 11;
console.log(solve(treeIncludeDfs.bind(null, getNode(), val), treeIncludeBfs.bind(null, getNode(), val), treeIncludesRecursive.bind(null, getNode(), val)))