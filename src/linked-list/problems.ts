import LinkedList from "./LinkedList";
import LinkedListNode from "./LinkedListNode";

export function findMiddle(list: LinkedList): LinkedListNode[] {
    const result = [];

    const length = list.length();
    const isEven = length % 2 === 0;
    let middle: number;

    if (isEven) {
        // e.g. A list with 6 elements, middle is [1,2,(3),4,5,6]
        middle = Math.floor(length / 2);
    } else {
        // e.g. A list with 5 elements, middle is [1,2,(3),4,5]
        middle = Math.ceil(length / 2);
    }

    while(list.next()) {
        if (list.current && list.current.value === middle) {
            result.push(list.current);
            if (isEven) {
                result.push(list.current.nextNode);
            }
            break;
        }
    }

    return result as LinkedListNode[];

}