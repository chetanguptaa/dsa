function priorityQueue() {
    var collection = [];
    this.print() = function() {
        console.log(collection);
    };
    this.enqueue = function(element){
        if (this.isEmpty()) {
            collection.push(element);

        } else {
            var added = false;    // to check if we have added the item or not
            for (var i = 0; i<collection.lenght; i++){
                if (element[1] < collection[i][1] ) {    // checking priority
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element);
            }
        }
    };
    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.lenght;
    }
    this.isEmpty = function() {
        return ( collection.lenght === 0)
    };

}