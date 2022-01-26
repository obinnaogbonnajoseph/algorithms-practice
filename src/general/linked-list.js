const { getLinkedNode, zipperData, LinkedNode, mergedListsData } = require('./data')

const getValues = (node) => {
    const vals = [];
    let cur = node;
    while (cur) {
        vals.push(cur.val)
        cur = cur.next;
    }
    return `Linked List values: ${vals}`;
}

const getSum = (node) => {
    let sum = 0;
    let cur = node;
    while (cur) {
        sum += cur.val;
        cur = cur.next;
    }
    return `Sum: ${sum}`
}

const find = (node, val) => {
    let cur = node;
    while (cur) {
        if (cur.val === val) return `Has Node(${val})? true`
        cur = cur.next;
    }
    return `Has Node(${val})? false`;
}

const getValue = (node, index) => {
    let cur = node, ind = 0;
    while (cur) {
        if (ind === index) return `Node: {val: ${cur.val}}`
        cur = cur.next;
        ++ind;
    }
    return `Index out of bound`
}

// null --> a --> b --> c --> d --> null
// prev    cur  next
// null <-- a <-- b <-- c <-- d

const reverseListItr = (node) => {
    let previous = null;
    let current = node;
    while (current) {
        const next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return getValues(previous);
}

const reverseListRecursive = (node, prev = null) => {
    if (!node) return getValues(prev)
    const cur = node;
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    return reverseListRecursive(next, prev)
}

const zipperList = (head1, head2) => {
    let index = 0, cur = head2, cur1 = head1, cur2 = head2.next
    while (cur1 && cur2) {
        if (index % 2 === 0) {
            cur.next = cur1;
            cur1 = cur1.next
        } else {
            cur.next = cur2;
            cur2 = cur2.next
        }
        cur = cur.next;
        ++index;
    }
    if (cur1) cur.next = cur1
    if (cur2) cur.next = cur2
    return getValues(head2);
}

const mergeSortedLists = (head1, head2) => {
    let cur1 = head1, cur2 = head2, cur = null, head = null;
    while (cur1 && cur2) {
        if (cur1.val < cur2.val) {
            if (cur) {
                cur.next = cur1;
                cur = cur.next
            } else {
                head = new LinkedNode(cur1.val);
                cur = head;
            }
            cur1 = cur1.next;
        } else {
            if (cur) {
                cur.next = cur2;
                cur = cur.next
            } else {
                head = new LinkedNode(cur2.val);
                cur = head;
            }
            cur2 = cur2.next;
        }
    }
    if (cur1) cur.next = cur1;
    if (cur2) cur.next = cur2;
    return getValues(head)
}

const mergePoint = (headA, headB) => {
    let curA = headA, curB = headB;
    while (curA !== curB) {
        if (curA.next === null) curA = headB
        else curA = curA.next
        if (curB.next === null) curB = headA
        else curB = curB.next
    }
    return curB.val
}

console.log(getValues(getLinkedNode()))
console.log(getSum(getLinkedNode()))
console.log(find(getLinkedNode(), 34))
console.log(getValue(getLinkedNode(), 4))
console.log(reverseListItr(getLinkedNode()))
console.log(reverseListRecursive(getLinkedNode()))
console.log(zipperList(...zipperData()))
console.log(mergeSortedLists(...zipperData()))
console.log(mergePoint(...mergedListsData()))