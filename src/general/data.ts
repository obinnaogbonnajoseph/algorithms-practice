export class BinTreeNode {
    left: BinTreeNode = null as unknown as BinTreeNode;
    right: BinTreeNode = null as unknown as BinTreeNode;
    val: number;
    constructor(val: number) {
        this.val = val;
    }
}

export class SinglyLinkedListNode {
    next: SinglyLinkedListNode = null as unknown as SinglyLinkedListNode;
    val: number;
    constructor(val: number) {
        this.val = val;
    }
}

//          3
//          /\
//         /  \
//       11    4
//       /\     \
//      4  2     1 

export const getBinTreeRootNode = () => {
    const root = new BinTreeNode(3);
    const leftNode = new BinTreeNode(11);
    const leftNodeleft = new BinTreeNode(4)
    const leftNodeRight = new BinTreeNode(2)
    const rightNode = new BinTreeNode(4);
    const rightNodeRight = new BinTreeNode(1);

    leftNode.left = leftNodeleft;
    leftNode.right = leftNodeRight;
    rightNode.right = rightNodeRight;
    root.left = leftNode;
    root.right = rightNode;

    return root;
}

//          3
//         / \
//        4   5
//           / \
//          6   7
//         / \   \
//        8   9   10
export const leftViewData = () => {
    const root = new BinTreeNode(3);
    root.left = new BinTreeNode(4);
    root.right = new BinTreeNode(5);
    root.right.left = new BinTreeNode(6);
    root.right.right = new BinTreeNode(7);
    root.right.left.left = new BinTreeNode(8);
    root.right.left.right = new BinTreeNode(9);
    root.right.right.right = new BinTreeNode(10);
    return root;
}

export const getSinglyLinkedListRootNode = () => {
    const root = new SinglyLinkedListNode(3);
    const scnd = new SinglyLinkedListNode(11);
    const thrd = new SinglyLinkedListNode(4);
    const frth = new SinglyLinkedListNode(2);
    const fith = new SinglyLinkedListNode(4);
    const sth = new SinglyLinkedListNode(1);
    fith.next = sth;
    frth.next = fith;
    thrd.next = frth;
    scnd.next = thrd;
    root.next = scnd;

    return root;
}

export const mergedSinglyLinkedListData = (): [SinglyLinkedListNode, SinglyLinkedListNode] => {
    const a = new SinglyLinkedListNode(1)
    const b = new SinglyLinkedListNode(1)

    const c = new SinglyLinkedListNode(3)
    const d = new SinglyLinkedListNode(4)
    const e = new SinglyLinkedListNode(5)

    a.next = c;
    b.next = c;
    c.next = d;
    d.next = e;

    const head1 = a;
    const head2 = b
    return [head1, head2];
}

export const zipperSinglyLinkedListData = (): [SinglyLinkedListNode, SinglyLinkedListNode] => {
    const linkedNode1 = () => {
        const root = new SinglyLinkedListNode(1)
        const scnd = new SinglyLinkedListNode(2)
        const thrd = new SinglyLinkedListNode(3)
        const frth = new SinglyLinkedListNode(4)
        thrd.next = frth;
        scnd.next = thrd;
        root.next = scnd;
        return root;
    }

    const linkedNode2 = () => {
        const root = new SinglyLinkedListNode(3)
        const scnd = new SinglyLinkedListNode(4)
        root.next = scnd;
        return root;
    }
    return [linkedNode2(), linkedNode1()]
}

export interface Graph {
    [prop: string]: string[]
}

export const graphData: Graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}