class Node{
	constructor(value){
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value){
		let node = new Node(value);

		if(!this.head){
			this.head = node;
			this.tail = node;
		}
		else{
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}

		this.length++;
		return this;
	}

	pop(){
		if(!this.head) return undefined;

		let oldTail = this.tail;

		if(this.length === 1){
			this.head = null;
			this.tail = null;
		}
		else{
			this.tail = oldTail.prev;
			this.tail.next = null;
		}
		oldTail.prev = null;

		this.length--;
		return oldTail;
	}

	shift(value){
		// add node to beginning of list
	}

	unshift(){
		// remove node from beginning of list
	}
}