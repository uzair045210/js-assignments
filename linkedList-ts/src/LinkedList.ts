class INode<T> {
    public next: INode<T> | null = null;
    public prev: INode<T> | null = null;
    constructor(public data: T) { }
}

interface ILinkedList<T> {
    insertInBegin(data: T): INode<T>;
    insertAtEnd(data: T): INode<T>;
    deleteNode(node: INode<T>): void;
    search(comparator: (data: T) => boolean): INode<T> | null;
    traverse(): T[];
    size(): number;
}

class LinkedList<T> implements ILinkedList<T> {
    private head: INode<T> | null = null;

    public insertAtEnd(data: T): INode<T> {
        const node = new INode(data);
        if (!this.head) {
            this.head = node;
        } else {
            const getLast = (node: INode<T>): INode<T> => {
                return node.next ? getLast(node.next) : node;
            };

            const lastNode = getLast(this.head);
            node.prev = lastNode;
            lastNode.next = node;
        }
        return node;
    }

    public insertInBegin(data: T): INode<T> {
        const node = new INode(data);
        if (!this.head) {
            this.head = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        return node;
    }

    public deleteNode(node: INode<T>): void {
        if (!node.prev) {
            this.head = node.next;
        } else {
            const prevNode = node.prev;
            prevNode.next = node.next;
        }
    }

    public search(comparator: (data: T) => boolean): INode<T> | null {
        const checkNext = (node: INode<T>): INode<T> | null => {
          if (comparator(node.data)) {
            return node;
          }
          return node.next ? checkNext(node.next) : null;
        };
        return this.head ? checkNext(this.head) : null;
      }

    public traverse(): T[] {
        const array: T[] = [];
        if (!this.head) {
            return array;
        }

        const addToArray = (node: INode<T>): T[] => {
            array.push(node.data);
            return node.next ? addToArray(node.next) : array;
        };
        return addToArray(this.head);
    }

    public size(): number {
        return this.traverse().length;
    }
}

const linkedList = new LinkedList<number>();

console.log(linkedList.traverse()); // []

linkedList.insertAtEnd(2);
linkedList.insertAtEnd(5);
linkedList.insertInBegin(1);
linkedList.insertInBegin(0);

console.log(linkedList.traverse()); // [0, 1, 2, 5]

const node = linkedList.search(data => data === 2);

linkedList.deleteNode(node);

console.log(linkedList.traverse()); // [0, 1, 5]
