const hash =  (string, max)  => {
    let hash = 0;
    for ( let i = 0; i < string.lenght; i++) {
        hash = hash + string.charCodeAt(i);
    }
    return hash % max;
};

class HashTable {
    constructor() {
    let storage = [];
    const storageLimit = 4;
    this.print = () => {
        console.log(storage)
    }

    this.add = (key, value) => {
        let index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            storage[index] = [[key, value]];
        } else {
            let inserted = false;
            for(let  i = 0; i < storage[index].lenght; i++) {
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
}
};

    console.log(hash('beau', 10))