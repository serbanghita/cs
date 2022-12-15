import LinkedListNode from "./LinkedListNode";
import LinkedList from "./LinkedList";
import {findMiddle} from "./problems";

test('add 3 nodes, remove the middle node', () => {
   const node1 = new LinkedListNode(1);
   const node2 = new LinkedListNode(2);
   const node3 = new LinkedListNode(3);

   const list = new LinkedList(node1);
   list.addNode(node2);
   list.addNode(node3);

   expect(list.length()).toEqual(3);
   expect(list.isHead(node1)).toBe(true);
   list.removeNode(node2);
   expect(list.length()).toEqual(2);
   expect(list.next()).toEqual(node1);
   expect(list.next()).toEqual(node3);
   expect(list.isHead(node1)).toBe(true);
   expect(node2.nextNode).toBeUndefined();
});

test('add 1 node, remove it', () => {
   const node1 = new LinkedListNode(1);
   const list = new LinkedList(node1);

   expect(list.length()).toEqual(1);
   expect(list.isHead(node1)).toBe(true);

   list.removeNode(node1);
   expect(list.head).toBeUndefined();
   expect(list.length()).toEqual(0);

   // Adding new head via addNode
   const node2 = new LinkedListNode(2);
   list.addNode(node2);
   expect(list.length()).toEqual(1);
   expect(list.head).toEqual(node2);
   // @ts-ignore
   expect(list.head.value).toEqual(2);
});

test('add 1 node, overriding head node', () => {
   const node1 = new LinkedListNode(1);
   const list = new LinkedList(node1);

   expect(list.length()).toEqual(1);
   expect(list.isHead(node1)).toBe(true);

   const node2 = new LinkedListNode(2);
   list.setHead(node2);

   expect(list.length()).toEqual(2);
   expect(list.isHead(node2)).toBe(true);
});

test('find middle of a linked list with even elements', () => {
   const node1 = new LinkedListNode(1);
   const node2 = new LinkedListNode(2);
   const node3 = new LinkedListNode(3);
   const node4 = new LinkedListNode(4);
   const node5 = new LinkedListNode(5);
   const node6 = new LinkedListNode(6);

   const list = new LinkedList(node1);
   list.addNode(node2);
   list.addNode(node3);
   list.addNode(node4);
   list.addNode(node5);
   list.addNode(node6);

   const length = list.length();

   expect(length).toEqual(6);

   const result = findMiddle(list);
   expect(result[0]).toEqual(node3);
   expect(result[1]).toEqual(node4);
});

test('find middle of a linked list with odd elements', () => {
   const node1 = new LinkedListNode(1);
   const node2 = new LinkedListNode(2);
   const node3 = new LinkedListNode(3);
   const node4 = new LinkedListNode(4);
   const node5 = new LinkedListNode(5);

   const list = new LinkedList(node1);
   list.addNode(node2);
   list.addNode(node3);
   list.addNode(node4);
   list.addNode(node5);

   expect(list.length()).toEqual(5);

   const result = findMiddle(list);
   expect(result[0]).toEqual(node3);
});