class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class LinkedNode {
    constructor(val) {
        this.val = val;
        this.next = null;
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

const getLinkedNode = () => {
    const root = new LinkedNode(3);
    const scnd = new LinkedNode(11);
    const thrd = new LinkedNode(4);
    const frth = new LinkedNode(2);
    const fith = new LinkedNode(4);
    const sth = new LinkedNode(1);
    fith.next = sth;
    frth.next = fith;
    thrd.next = frth;
    scnd.next = thrd;
    root.next = scnd;

    return root;
}

const linkedNode1 = () => {
    const root = new LinkedNode(1)
    const scnd = new LinkedNode(2)
    const thrd = new LinkedNode(3)
    const frth = new LinkedNode(4)
    thrd.next = frth;
    scnd.next = thrd;
    root.next = scnd;
    return root;
}

const linkedNode2 = () => {
    const root = new LinkedNode(3)
    const scnd = new LinkedNode(4)
    root.next = scnd;
    return root;
}

const mergedListsData = () => {
    const a = new LinkedNode(1)
    const b = new LinkedNode(1)

    const c = new LinkedNode(3)
    const d = new LinkedNode(4)
    const e = new LinkedNode(5)

    a.next = c;
    b.next = c;
    c.next = d;
    d.next = e;

    const head1 = a;
    const head2 = b
    return [head1, head2];
}

const zipperData = () => {
    return [linkedNode2(), linkedNode1()]
}

const graphData = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

module.exports = { getNode, getLinkedNode, graphData, zipperData, LinkedNode, mergedListsData };