const binarySearch = (arr, target) => {
    let left = 0;
    let right  = arr.length - 1;
    for ( let i= left; i <= right; i++) {
        let middleIndex = Math.floor((left + right) / 2);
        if ( target === arr[middleIndex]) {
            return middleIndex;
        } else if ( target > arr[middleIndex]) {
            left = middleIndex + 1;
        } else {
            right = middleIndex - 1;
        }
    }
    return -1;
}



console.log(binarySearch([-4, -777,10 , -1 ] , 10));