/* 
    To reiterate, queues use a FIFO structure meaning the first thing in is also
    the first thing out. Like waiting in line at a drive-thru.

    Use cases include: printing copies on a printer, waiting in game lobby, etc.
*/

// As with stacks, we can use JS built-in arrays to achieve the same result
let q = [];
q.push('first');
q.push('second');
q.push('third');

// To access the first element in we use shift()
q.shift();
q.shift();
q.shift();

// unshift/pop together also achieve the same result
q.unshift('first');
q.unshift('second');
q.unshift('third');

q.pop();
q.pop();
q.pop();

/*  However, it's usually better to implement your own queue strucuture since the 
    above is inefficient due to the reindexing of the arrays elements
*/
class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // add to the end of list
    enqueue(val){
        let node = new Node(val);
        if(!this.size){
            this.first = this.last = node;
        }
        else{
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }

    // remove from the beginning of list since the first thing 
    // is also at the front of our list
    dequeue(){
        if(!this.size) return null;
        let current = this.first;
        if(this.first == this.last){
            this.first = this.last = null;
        }
        else{
            this.first = current.next;
        }

        this.size--;
        return current.value;
    }
}