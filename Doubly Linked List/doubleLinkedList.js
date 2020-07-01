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

	shift(){
		// remove node from beginning of list
		if(!this.head) return undefined;

		let oldHead = this.head;

		if(this.length === 1){
			this.head = null;
			this.tail = null;
		}
		else{
			this.head = oldHead.next;
			this.head.prev = null;
		}
		oldHead.next = null;

		this.length--;
		return oldHead;
	}

	unshift(value){
		// add node to beginning of list
		let node = new Node(value);

		if(!this.head){
			this.head = node;
			this.tail = node;
		}
		else{
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
		}

		this.length++;

		return this;
	}

	get(index){
		// depending on the index either search from the
		// list's head or tail
		// I.E. list length = 10 so index 3 (fourth item) is closer to head
		// so start search from head

		if(index < 0 || index >= this.length) return null;
		switch(index){
			case index < 0:
			case index >= this.length:
				return null;
				break;
			case index <= (this.length/2-1):
				return this._searchHelper(true);
				break;
			case index > (this.length/2-1):
				return this._searchHelper(false);
				break;
		}
	}

	set(index, value){

	}

	// Helper function for looping through lists depending on whether index is > or <= list.length - 1;
	_searchHelper(shouldLoopFromHead){
		
	}
}