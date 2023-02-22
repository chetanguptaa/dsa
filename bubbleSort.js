

function bubbleSort(arr) {
    let swapped
    do {
      swapped = false
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = temp
          swapped = true
        }
      }
    } while (swapped)
  }
  
  let arr = [8, 20, -2, 4, -6];
  bubbleSort(arr);
  
// const bubbleSort  = (arr) => {
//   let swapped;
//   if (swapped === false) {
//     for ( let i= 0; i < arr.length; i++) {
//       if ( arr[i] >arr[i+1]) {
//         let temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//         swapped = true;
//       }
//     }
//   }
// }

// console.log(bubbleSort([1,5,4,2,3]));