//we can use arry also but it might be inefficient because of reindexing of array items.
//this is why we use singlyLinkedList;
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    //function 1 push();
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = this.first;
        }
        else{
            var current = this.first;
            this.first = newNode;
            newNode.next = current;
        }
        return ++this.length;
    }

    //function 2 pop();
    pop(){
        if(this.length === 0) return false;
        if(this.length === 1) {
            this.first = null;
            this.last = this.first;
        }
        else{
            var current = this.first;
            this.first = current.next;
            //current = null;
        }
        return current.val;

    }
}

var s = new Stack();

console.log(s.push(10));
console.log(s.push(20));
console.log(s.push(30));
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());