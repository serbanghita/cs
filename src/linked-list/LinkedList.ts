import LinkedListNode from "./LinkedListNode";

export default class LinkedList {
    public head: LinkedListNode | undefined;
    public last: LinkedListNode | undefined;
    public current: LinkedListNode | undefined;
    constructor(head: LinkedListNode) {
        this.head = head;
        this.last = head;
    }

    isHead(node: LinkedListNode): boolean {
        return node === this.head;
    }

    // Set new head node. Put the previous one to the end of the list.
    setHead(node: LinkedListNode) {
        const oldHead = this.head;
        this.head = node;
        this.head.nextNode = oldHead;
    }

    // Add node to the end of the list. Default behavior.
    addNode(node: LinkedListNode) {
        const lastNode = this.last;
        if (lastNode) {
            lastNode.nextNode = node;
        }
        this.last = node;

        if (!this.head || !(this.head instanceof LinkedListNode)) {
            this.head = node;
        }
    }

    // Linked list BEFORE:
    // - (node1){value1, node2}, (node2){value2, node3}, (node3){value3, null}
    // Linked list AFTER removing (node2):
    // - (node1){value1, node3}, (node3){value3, null)
    removeNode(node: LinkedListNode) {
        // Go to previous node and delete the reference to the node
        // being deleted.
        let prevNode = null;

        // 1. reset current
        this.current = undefined;
        while(this.next()) {
            if (this.current === node) {
                // Node to be deleted is found.
                // Get it's "next" node and assign it to the "previous"'s "next" node.
                if (prevNode) {
                    (prevNode as LinkedListNode).nextNode = (node as LinkedListNode).nextNode;
                }
                // Reset "node"'s next "node".
                (node as LinkedListNode).nextNode = undefined;
                // Lastly check if the node is a "head" node. Remove the reference.
                if (node === this.head) {
                    this.head = undefined;
                }
                break;
            }
            prevNode = this.current;
        }

    }

    next(): LinkedListNode | undefined {
        if (!this.current) {
            this.current = this.head;
            return this.current;
        }

        this.current = this.current.nextNode;

        return this.current;
    }

    length(): number {
        let length = 0;
        this.reset();
        while(this.next()) {
            length++;
        }
        return length;
    }

    reset() {
        this.current = undefined;
    }
}