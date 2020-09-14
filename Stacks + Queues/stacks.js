/*  Stacks are also data collections with the exception that they must 
    abide by a LIFO principle. Meaning the last element added to them will be the
    first element removed.

    Queues on the other hand follow a FIFO principle (first in - first out).

    Some use case include: managing functions invocations, undo/redo features in programs (like PS), and your browser history
*/

// The following is a stack using JS built-in arrays since using only push/pop OR unshift/shift meets the LIFO principle
let stack = [];
stack.push('item 1');
stack.push('item 2');
// item 3 is now the last element added and is the end of the array
stack.push('item 3');

// so it will also be the first element removed when pop() is called since pop removes from the end
stack.pop();
stack.pop();
stack.pop();

// The applies if using only unshift/shift however using this method is less efficient than using push/pop since the indices have to be reindexed for every addition/removal
stack.unshift('item 1');
stack.unshift('item 2');
// item 3 is at the front of the array but is also the last element added
stack.unshift('item 3');

// item 3 is also the first element removed since shift() removes from the front
stack.shift();
stack.shift();
stack.shift();

/*  Even though we achieve the LIFO principle with arrays, it's not a great idea 
    since LIFO doesn't require accessing information based off indices. 
    And this is why using linked lists is a better approach to implementing LIFO 
    since it dictates how we should access the data inside a collection.

    As far as Big O is concernced stacks/queues are always O(1) when inserting
    and removing. Searching and accessing specific elements is irrelevant and if it's
    desired than a different data structure should be used.
*/
class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(params) {
        this.size = 0;
        this.first = null;
        this.last = null;
    }

    push(value){
        let node = new Node(value);
        if(!this.size){
            this.first = this.last = node;
        }
        else{
            let temp = this.first;
            this.first = node;
            node.next = temp;
        }
        return ++this.size;
    }

    pop(){
        if(!this.size) return null;
        
        let current = this.first;
        switch(this.size){
            case 1:
                this.first = this.last = null;
                break;
            default:
                this.first = current.next;
                break;
        }
        this.size--;
        return current.value;
    }
}