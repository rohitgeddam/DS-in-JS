class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    //function insert(val);
    insert(val){
        var newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
            return this;
        }else{
            var check = this.root;
            var notFound = true;
            while(notFound){
                if(val > check.val)
                {
                   // check = check.right;
                    if(!check.right){
                        check.right = newNode;
                        notFound = false;
                    }
                    else if(check.right){
                        check = check.right;
                    }
                }
                else if(val < check.val)
                {
                   // check = check.left;
                    if(!check.left){
                        check.left = newNode;
                        notFound = false;
                    }
                    else if(check.left){
                        check = check.left;
                    }
    
                }
                else //equal case.
                {   
                    notFound = false;
                    return check;
                }



            }
          
        }
        return this;

    }

    //function search();
    search(val){
        if(!this.root) return false;
        //if(this.root.val === val) return true;
        var current = this.root;
        var notFound = true;
        while(notFound){
            if(current.val === val){
                return true;
            }
           else if(current.val < val){
                if(!current.right){
                    return false;
                }
                else {
                    current = current.right;
                }
            }
            else{
                if(!current.left){
                    return false;
                }
                else{
                    current = current.left;
                }
            }
            
        }
        if(notFound){
            return false;
        }
    }

    //BFS();
    bfs(){
       var node = this.root;
       var data = [];
       var queue = [];
        queue.push(node);

        while(queue.length){
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    

    //DFS() PreOrder;
    dfsPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node.val);
            if(node.right)  traverse(node.right);
            if(node.left)  traverse(node.left); 
        }
        traverse(this.root);
        return data;
        
    }
    //DFS() PostOrder();
    dfsPreOrder(){
        var data = [];
        function traverse(node){
           
            if(node.right)  traverse(node.right);
            if(node.left)  traverse(node.left); 
            data.push(node.val);
        }
        traverse(this.root);
        return data;

    }

    dfsInOrder(){
        var data = [];
        function traverse(node){
           
            if(node.right)  traverse(node.right);
            data.push(node.val);
            if(node.left)  traverse(node.left); 
            
        }
        traverse(this.root);
        return data;

    }
     
    
}


let tree = new BinarySearchTree();
tree.insert(50);
tree.insert(10);
tree.insert(100);
tree.insert(101);
tree.insert(1);
tree.insert(12);
console.log(tree.dfsPreOrder());
//console.log(tree.search(0));
console.log(tree.bfs());
//console.log(tree);

    