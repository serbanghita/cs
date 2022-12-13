import LinkedListNode from "./LinkedListNode";

export default class LinkedList {
    private iterator: LinkedListNode | null = null;
    constructor(public head: LinkedListNode | null) {

    }

    isHead(node: LinkedListNode): boolean {
        return node === this.head;
    }

    setHead(node: LinkedListNode) {
        this.head = node;
    }

    unsetHead() {
        this.head = null;
    }

    // Add node to the end of the list.
    addNode(node: LinkedListNode) {
        if (!this.head || !(this.head instanceof LinkedListNode)) {
            throw new Error("List doesn't have a head.");
        }
    }

    // Linked list before:
    // - (node1){value1, node2}, (node2){value2, node3}, (node3){value3, null}
    // Linked list after removing (node2):
    // - (node1){value1, node3}, (node3){value3, null)
    removeNode(node: LinkedListNode) {
        // Go to previous node and delete the reference to the node
        // being deleted.


    }

    next(): LinkedListNode | null {
        if (this.iterator === null) {
            return this.head;
        }

        const nextNode = this.iterator.nextNode;
        this.iterator = nextNode;

        return nextNode;
    }
}