class INode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    insertAtEnd(data) {
        const node = new INode(data);
        if (!this.head) {
            this.head = node;
        }
        else {
            const getLast = (node) => {
                return node.next ? getLast(node.next) : node;
            };
            const lastNode = getLast(this.head);
            node.prev = lastNode;
            lastNode.next = node;
        }
        return node;
    }
    insertInBegin(data) {
        const node = new INode(data);
        if (!this.head) {
            this.head = node;
        }
        else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        return node;
    }
    deleteNode(node) {
        if (!node.prev) {
            this.head = node.next;
        }
        else {
            const prevNode = node.prev;
            prevNode.next = node.next;
        }
    }
    search(comparator) {
        const checkNext = (node) => {
            if (comparator(node.data)) {
                return node;
            }
            return node.next ? checkNext(node.next) : null;
        };
        return this.head ? checkNext(this.head) : null;
    }
    traverse() {
        const array = [];
        if (!this.head) {
            return array;
        }
        const addToArray = (node) => {
            array.push(node.data);
            return node.next ? addToArray(node.next) : array;
        };
        return addToArray(this.head);
    }
    size() {
        return this.traverse().length;
    }
}
const linkedList = new LinkedList();
console.log(linkedList.traverse());
linkedList.insertAtEnd(2);
linkedList.insertAtEnd(5);
linkedList.insertInBegin(1);
linkedList.insertInBegin(0);
console.log(linkedList.traverse());
const node = linkedList.search(data => data === 2);
linkedList.deleteNode(node);
console.log(linkedList.traverse());


// * Output

/* *
* []
* [ 0, 1, 2, 5 ]
* [ 0, 1, 5 ]
*/

