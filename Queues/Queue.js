class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    //function 1        //add from end .remove from first.
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.length;
    }
    //function 2
    dequeue(){  
        if(!this.first) return null;

        var current = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return current.val;
    }


}

var q = new Queue();
console.log(q.enqueue(10));
console.log(q.enqueue(20));
console.log(q.enqueue(30));
console.log(q.enqueue(40));
console.log(q.length);
console.log(q.dequeue());
console.log(q.length);