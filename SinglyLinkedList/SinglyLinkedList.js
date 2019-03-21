class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){ //function 1;
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // function 2 - pop ;
    pop(){ // this pops off the last item of list;
        if(!this.head){
            return undefined;
        }
        var current = this.head;
        var last = this.head;
        while(current.next){
            last = current;
            current = current.next;
            
        }
        
        last.next = null;
        this.tail = last;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;

    }
    //function 3 shifting;
    shifting(){
        if(!this.head) return undefined;

        let temp = this.head;
        this.head = temp.next;
        this.length--;
        if(this.length === 0) this.tail = null;
        return temp;
        
    }
    //function 4 unshift;
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else { //remember to put this else;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //functin 5 get;
    get(index){
        if(index < 0 || index >= this.length) return null;
        let current = this.head; //its a node;
        for(let i = 0;i < index;i++){
            current = current.next;
        }
        return current;
    }

    //functin 6 set;
    set(index,value){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = value;
            return true;
        }
        return false;
         
    }

    //function 7 insert;
    insert(index,value){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);

        var newNode = new Node(val);
        var previous = get(index - 1);
        var temp = previous.next;
        previous.next = newNode;
        newNode.next = temp;
        this.length++;

    }

    //function 8 remove;
    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === this.length - 1) this.pop();
        if(index === 0) this.shift();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;

        for(var i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }
    

    
}

// var list = new SinglyLinkedList()
// console.log(list.push("HELLO"));
// console.log(list.push("GOODBYE"));
// console.log(list.length);
// // // list.traverse();
// // console.log(list.pop());
// // console.log(list.shifting());
// console.log(list.unshift("Good Morning"));
// console.log(list.get(2));
// console.log(list.length);
// console.log(list.set(0,"Hi"));
// console.log(list.length);
// console.log("***********************");
// console.log(list);
// console.log("************************");
// console.log(list);
// list.remove(1);
// // console.log(list.pop());



