const  linearSearch = (arr, target) => {
    for ( let i = 0; i< arr.lenght; i++) {
        if( arr[i] === target ) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([-3 ,33, 34, 69] , 69));
console.log(linearSearch([-5 ,3, 4, 9] , 2));
