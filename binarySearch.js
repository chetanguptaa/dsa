const binarySearch = (arr, target) => {
    let leftIndex = 0;
    let rightIndex  = arr.length - 1;
    let middleIndex = Math.round((leftIndex + rightIndex) / 2);
    for ( let i= leftIndex; i <= rightIndex; i++) {
        if ( target === arr[middleIndex]) {
            return middleIndex;
        } else if ( target > arr[middleIndex]) {
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex - 1;
        }
    }
    return -1;
}
console.log(binarySearch([1,2,3,4,5], 3));