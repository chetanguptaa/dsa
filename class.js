class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right ;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root ;
        if(node === null)  {
            this.root = new Node(data) ;
            return;
        }
        else {
            function seaarchTree(node) {
                if(data < node.data) {
                    if(node.left === null) {
                        
                    }
                }
            }
        }
    }
}