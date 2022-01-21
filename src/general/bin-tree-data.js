class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//          3
//          /\
//         /  \
//       11    4
//       /\     \
//      4  2     1 

const getNode = () => {
    const root = new Node(3);
    const leftNode = new Node(11);
    const leftNodeleft = new Node(4)
    const leftNodeRight = new Node(2)
    const rightNode = new Node(4);
    const rightNodeRight = new Node(1);

    leftNode.left = leftNodeleft;
    leftNode.right = leftNodeRight;
    rightNode.right = rightNodeRight;
    root.left = leftNode;
    root.right = rightNode;

    return root;
}

module.exports = getNode;