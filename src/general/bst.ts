import { BinTreeNode, bstData } from "./data";

const inorderTraversal = (node: BinTreeNode): string => {
    const result: number[] = [];
    const inOrder = (node: BinTreeNode) => {
        if (!node) return;
        inOrder(node.left);
        result.push(node.val);
        inOrder(node.right);
    }
    inOrder(node);
    return `In order: ${result}`
}

const postorderTraversal = (node: BinTreeNode): string => {
    const result: number[] = [];
    const postOrder = (node: BinTreeNode) => {
        if (!node) return;
        postOrder(node.left);
        postOrder(node.right);
        result.push(node.val);
    }
    postOrder(node);
    return `Post order: ${result}`
}

const preorderTraversal = (node: BinTreeNode): string => {
    const result: number[] = [];
    const preOrder = (node: BinTreeNode) => {
        if (!node) return;
        result.push(node.val);
        preOrder(node.left);
        preOrder(node.right);
    }
    preOrder(node);
    return `Pre order: ${result}`
}

const add = (node: BinTreeNode, val: number) => {
    let cur = node;
    while (cur) {
        if (cur.val > val) {
            if (cur.left) cur = cur.left;
            else {
                cur.left = new BinTreeNode(val);
                break;
            }
        } else {
            if (cur.right) cur = cur.right;
            else {
                cur.right = new BinTreeNode(val);
                break;
            }
        }
    }
    return inorderTraversal(node);
}




console.log(inorderTraversal(bstData()));
console.log(preorderTraversal(bstData()));
console.log(postorderTraversal(bstData()));
console.log(add(bstData(), 7))