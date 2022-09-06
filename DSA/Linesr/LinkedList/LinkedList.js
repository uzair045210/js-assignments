// import { Node } from '../Node.mjs'

class Node {
    constructor(_data) {
        this.data = _data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    // O(1)
    insert(_value) {
        let newNode = new Node(_value)
        let prev = this.tail
        if (this.head == null) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            prev.next = newNode
            this.tail = newNode
        }
        this.size++
    }

    // O(n)
    remove(_value) {
        let curr = this.head, prev = null
        while (curr.next) {
            if (curr.data == _value) {
                if (prev == null)
                    this.head = curr.next
                else
                    prev.next = curr.next
                this.size--
                return
            }
            prev = curr
            curr = curr.next
        }
        return -1
    }

    // O(n)
    indexOf(_value) {
        let curr = this.head, i = -1
        while (curr.next) {
            if (curr.data == _value)
                break;
            curr = curr.next;
            i++;
        }
        return i;
    }

    isEmpty() {
        return this.size == 0
    }

    size() {
        return this.size
    }

    print() {
        let curr = this.head, str = "{ "
        while (curr) {
            str += curr.data
            if (curr.next != null)
                str += ", "
            curr = curr.next
        }
        console.log(str + " }")
    }

}

let list = new LinkedList();
for (let i = 1; i <= 100000; i++)
    list.insert(i)
list.print()

for (let i = 100000; i >= 1; i--)
    list.remove(i)
list.print()


// Output = {1, 2, 3, ..., 100000} (Estimate Time is: 18.035s) [Without Tail Pointer]
                                                   // ^
// Output = {1, 2, 3, ..., 100000} (Estimate Time is: 0.2s) [With Tail Pointer]

// Output = {100000, 99999, 99998, ..., 3, 2, 1} (Estimate Time is: 17.083s) [In reverse order]
