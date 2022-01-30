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
    return `Node after add: ${inorderTraversal(node)}`;
}

const deleteNode = (node: BinTreeNode, val: number) => {
    const delNode = (node: BinTreeNode, val: number): BinTreeNode => {
        if (node.val < val) node.right = delNode(node.right, val);
        else if (node.val > val) node.left = delNode(node.left, val);
        else {
            // leaf node or one branch node
            if (!node.left) return node.right
            if (!node.right) return node.left
            // replace with inorder successor
            node.val = minVal(node.right)
            node.right = delNode(node.right, node.val)
        }
        return node;
    }

    const minVal = (node: BinTreeNode): number => {
        let min = node.val;
        while (node.left) {
            min = node.left.val;
            node = node.left
        }
        return min
    }

    delNode(node, val);
    return `Node after del: ${inorderTraversal(node)}`
}




console.log(inorderTraversal(bstData()));
console.log(preorderTraversal(bstData()));
console.log(postorderTraversal(bstData()));
console.log(add(bstData(), 7))
console.log(deleteNode(bstData(), 8))