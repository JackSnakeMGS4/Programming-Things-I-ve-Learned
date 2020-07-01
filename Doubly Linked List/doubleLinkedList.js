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

	getNode(index){
		if(index < 0 || index >= this.length) return null;
		else if(index <= (this.length/2)){
			return this._searchHelper(true, index);
		}
		else{
			// index > (this.length/2)
			return this._searchHelper(false, index);
		}
	}

	setNode(index, value){
		let nodeToChange = this.getNode(index);
		nodeToChange ? nodeToChange.value = value : null;

		return !!nodeToChange;
	}

	// Helper function for looping through lists depending on whether index is > or <= list.length - 1;
	_searchHelper(shouldLoopFromHead, index){
		let currentIndex;
		let currentNode;
		shouldLoopFromHead ?  currentIndex = 0 : currentIndex = this.length - 1;
		shouldLoopFromHead ? currentNode = this.head : currentNode = this.tail;

		do{
			if(currentIndex === index){
				break;
			}
			else{
				shouldLoopFromHead ? currentNode = currentNode.next : currentNode = currentNode.prev;

				shouldLoopFromHead ? currentIndex++ : currentIndex--;
			}
		}
		while(currentIndex !== index)

		return currentNode;
	}

	insertNode(index, value){
		if(index < 0 || index >= this.length) return false;
		else if(index === 0) return !!this.unshift(value);
		else if(index === this.length - 1) return !!this.push(value);
		else{
			let node = new Node(value);
			let oldNode = this.getNode(index);	

			node.prev = oldNode.prev;
			oldNode.prev.next = node;
			node.next = oldNode;
			oldNode.prev = node;

			this.length++;
			return true;
		}
	}

	removeNode(index){

	}
}