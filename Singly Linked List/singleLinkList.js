class Node{
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// add a node to the end of our list
	push(value){
		let nextNode = new Node(value);

		if(this.head === null || this.head === undefined){
			this.head = nextNode;
			this.tail = this.head;
		}
		else{
			this.tail.next = nextNode;
			this.tail = nextNode;
		}

		this.length++;

		return this;
	}

	pop(){
		if(this.head === null || this.head === undefined){
			return undefined;
		}

		let current = this.head;
		while(current){
			
		}
	}
}