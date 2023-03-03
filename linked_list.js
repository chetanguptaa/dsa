class LinkedList  {
    constructor() {
        let lenght = 0;
        let head = null;

        class Node  {
            constructor(element) {
                this.element = element;
                this.next = null;
            }
        };

        this.size = () => {
            return lenght ;
        };

        this.head = () => {
            return head;
        }


        this.add = (element) => {
            let node = new Node(element);
            if(head === null) {
                head = node;
            } else {
                let currentNode = head;
                while(currentNode.next){
                    currentNode = currentNode.next;
                }
                currentNode.next = node;
            }

            lenght++;
        };

        this.remove = (element) => {
            let currentNode = head;
            let previousNode;
            if(currentNode.element === element) {
                head = currentNode.next;
            } else {
                while(currentNode.element !== element) {
                    previousNode = currentNode;
                    currentNode = currentNode;
                }
                previousNode.next = currentNode;
            };
            lenght--;
        } ;

        this.isEmpty = () => {
            return lenght === 0;
        };
    
        this.indexOf = (element) => {
            let currentNode = head;
            let index = -1;

            while(currentNode) {
                index ++;
                if (currentNode.element === element) {
                    return index;
                }
                currentNode = currentNode.next;
            }
            return -1;
        };

        this.elementAt = (index) => {
            let currentNode = head;
            let count = 0;
            while (count < index) {
                count ++;
                currentNode  = currentNode.next;
            };
            return currentNode.element;
        };  

        this.addAt = (index, element) => {
            let node = new Node(element);
            let currentNode = head;
            let previousNode;
            let currentIndex = 0;
            if (index > lenght) {
                return false;
            }
            if (index === 0) {
                node.next = currentNode;
                head = node;
            } else {
                while(current < index) {
                    currentIndex++;
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                node.next = currentNode;
                previousNode.next= node;
            }
            lenght++;
        }
        this.removeAt = (index) => {
            let currentNode = head;
            let previousNode;
            let currentIndex = 0;
            if (index < 0 || index >= lenght) {
                return null;
            }
            if(index === 0) {
                head = currentNode.next;
            } else {
                while(currentIndex <  index) {
                    currentIndex ++;
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                previousNode.next = currentNode.next
            }                
            lenght--;
            return currentNode.element;
        } 
    }
}


    var conga = new LinkedList();
    conga.add('kitten');
    conga.add('puppy');
    conga.add('dog');
    conga.add('cat');
    conga.add('fish');
    console.log(conga.size());
    console.log(conga.removeAt(3));
    console.log(conga.elementAt(3));
    console.log(conga.indexOf(3));
    console.log(conga.size());

