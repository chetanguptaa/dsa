function hash (string, max) {
    var hash = 0;
    for ( i = 0; i < string.lenght; i++) {
        hash = hash + string.charCodeAt(i);
    }
    return hash % max;
};

function HashTable() {

    let storage = [];
    const storageLimit = 4;
    this.print = function() {
        console.log(storage)
    }

    this.add = fuunction (key, value) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ];
        } else {
            var inserted = false;
            for(var  i = 0; i < storage[index].lenght; i++) {
                if (storage[index][i][0] === key ) {
                    storage[index][i][0] = value;
                    inserted = true;
                }
            }
            if ( inserted === false) {
                storage[index].push([key, value]);

            }
        }
    };
 
    this.remove = function(key) {
        var index = hash(key, storageLimit);
        if (storage[index].lenght === 1 && storage[index][0][0] === key) {
            delete storage[index];

        }
        else {
            for (var i = 0 ; i < storage[index] ; i++) {
                if ( storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    };

    this.lookup = function(key) {
        var index = hash (key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        }
        else {
            for (var i = 0; i < storage[index].lenght ; i++) {
                if( storage[indes][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    };
};

    console.log(hash('beau', 10))