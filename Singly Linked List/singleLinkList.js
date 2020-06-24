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
		if(!this.head){
			return undefined;
		}

		let current = this.head;
		let tempTail = current;
		while(current.next){
			tempTail = current;
			current = current.next;
		}

		this.tail = tempTail;
		this.tail.next = null;
		this.length--;
		if(this.length === 0){
			this.head = null;
			this.tail = null;
		}

		return current;
	}

	shift(){
		if(!this.head) return undefined;

		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if(this.length === 0){
			this.tail = null;
		}

		return currentHead;
	}

	unshift(value){
		let newHead = new Node(value);

		if(!this.head){
			this.head = newHead;
			this.tail = this.head;
		}
		else{
			newHead.next = this.head;
			this.head = newHead;
		}

		this.length++;

		return this;
	}

	getNode(nodePos){
		if(nodePos < 0 || nodePos >= this.length) return null;

		let currentPos = 0;
		let currentNode = this.head;
		while(currentPos < nodePos){
			currentNode = currentNode.next;
			currentPos++;
		}

		return currentNode;
	}

	setNode(nodePos,value){
		let node = this.getNode(nodePos);
		if(node){
			node.value = value;
			return true;
		}			

		return false;
	}

	insertNode(nodePos,value){
		if(nodePos < 0 || nodePos > this.length) return false;
		else if(nodePos === this.length) return !!this.push(value);
		else if(nodePos === 0) return !!this.unshift(value);
		else{
			let newNode = new Node(value);
			let prevNode = this.getNode(nodePos - 1);
			let nodeAhead = prevNode.next;

			prevNode.next = newNode;
			newNode.next = nodeAhead;

			this.length++;
			return true;
		}
	}

	removeNode(nodePos){
		if(nodePos < 0 || nodePos >= this.length) return undefined;
		else if(nodePos === this.length - 1) return this.pop();
		else if(nodePos === 0) return this.shift();
		else{
			let prevNode = this.getNode(nodePos - 1);
			let nodeToRemove = prevNode.next;

			prevNode.next = nodeToRemove.next;
			this.length--;

			return nodeToRemove;
		}
	}

	reverse(){
		// First failed attempt at reversing list
		// NOTE: I was really close but messed up the tail and head 
		// .next properties

		// let oldHead = this.head;
		// let oldTail = this.tail;
		// this.head = oldTail;
		// this.tail = oldHead;

		// let pre = oldHead;
		// let current = pre.next;
		// let oldNext;

		// for(let i = 0; i < this.length - 1;i++){
		// 	oldNext = current.next;
		// 	current.next = pre;
		// 	pre = current;
		// 	current = oldNext;
		// }

		// this.head.next = pre;
		// this.tail.next = null;

		// return this;

		// A cleaner and working solution from the course instructor
		let node = this.head;
		this.head = this.tail;
		this.tail = node;

		let next;
		let prev = null;

		for(let i = 0; i < this.length; i++){
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}

		return this;
	}

	// Helper Function To Visualize reverse()
	print(){
		let arr = [];
		let current = this.head;
		while(current){
			arr.push(current.value);
			current = current.next;
		}

		console.table(arr);
	}
}