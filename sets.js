// class MySet {
//     constructor() {
//         // the var collection  will hold the array
//         let collection = [];
//         // this method will check for the presence of an element and return true or false
//         this.has =  (element) => {
//             return (collection.indexOf(element) !== -1);
//         };

//         this.values = function () {
//             return collection;
//         };
//         // this METHOD will add an element to the array 
//         this.add = function (element) {
//             if (!this.has(element)) {
//                 collection.push(element);
//                 return true;
//             }
//             return false;
//         };

//         this.remove = function (element) {
//             if (this.has(element)) {
//                 index = collection.indexOf(element);
//                 collection.splice(index, 1); // splice means we gonna take out an element in an array starting from the index of the element we gonna take out 1 element
//                 return true;
//             }
//             return false;
//         };
//         this.size = function () {
//             return collection.length;
//         };

//         this.union = function (otherSet) {
//             var unionSet = new mySet();
//             var firstSet = this.values();
//             var secondSet = otherSet.values();
//             firstSet.forEach(function (e) {
//                 unionSet.add(e);
//             });
//             secondSet.forEach(function (e) {
//                 unionSet.add(e);
//             });
//             return unionSet;
//         };

//         this.intersection = function (otherSet) {
//             var intersectionSet = new mySet();
//             var firstSet = this.values();
//             firstSet.forEach(function (e) {
//                 if (otherSet.has(e)) {
//                     intersectionSet.add(e);
//                 }
//             });
//             return intersectionSet;
//         };

//         this.difference = function (otherSet) {
//             var differenceSet = new Set();
//             var firstSet = this.values();
//             firstSet.forEach(function (e) {
//                 if (!otherSet.has(e)) {
//                     differenceSet.add(e);
//                 };
//             });
//             return differenceSet;
//         };

//         this.subset = function (otherSet) {
//             var firstSet = this.values();
//             return firstSet.every(function (value) {
//                 return otherSet.has(value);
//             });
//         };
//     }
// }

// var setA = new mySet();
// var setB = new mySet();
// setA.add("a");
// setB.add("b");
// setB.add("c");
// setB.add("a");
// console.log(setA.subset(setB));
// console.log(setA.intersection(setB).values());
// console.log(setA.union(setB).values());


// has , values, add ,remove, size, union , intersection, difference,  subset

class Set  {
    constructor() {
        let collection = [];
        this.has  = (ele) => {
            if ( collection.indexOf(ele)  !== -1) {
                return false;
            } return true;
        }
        this.values = () => {
            return collection;
        }
        this.add = (ele) => {
            if ( collection.indexOf(ele) === -1) {
                collection.push(ele);
            }
        }
        this.remove = (ele) => {
            if ( collection.indexOf(ele) !== -1) {
                collection.splice(collection.indexOf(ele), 1);
            }
        }
        this.size = () => {
            return collection.length;
        }
        this.union = (set2) => {
            for ( let i = 0; i < set2.length; i++) {
                if ( collection.indexOf(set2[i]) == -1 ) {
                    collection.push(set2[i]);
                    return true;
                }
                return false;
            }
        }
        this.intersection = (set2) => {
            let newCollection = [...collection];
            for ( let i =0; i < set2.length; i++  ) {
                if ( collection.indexOf(set2[i]) == -1) {
                    newCollection.splice(collection.indexOf(set2[i]), 1);
                    return newCollection;
                }
            }

        }
        this.difference = (set2) => {
            let newCollection = [...collection];
            for ( let i = 0; i < set2.length; i++) {
                if ( collection.indexOf(set2[i]) !== -1) {
                    collection.splice(collection.indexOf([set2[i]]), 1)
                    return newCollection;
                }
            }
        } 
    }
}

var setA = new Set();
var setB = new Set();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
