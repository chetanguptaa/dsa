function linearSearch(array, x) {
    for (var i=0; i<array.length; i++) {
        if (array[i] === x) {
            return i
        }
        
        }
        return -1
    }

console.log(linearSearch([1,2,3,4,6,4,5], 5))

function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length-1
    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex)/2)
        if(arr[middleIndex] === target ) {
            return middleIndex;
        } 
        if(arr[middleIndex] > target) {
            rightIndex = middleIndex -1
        }
        else {
            leftIndex = middleIndex + 1
        }
        
    }
    return -1
}
console.log(binarySearch([1,2,34,4],2))

