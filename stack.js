const reverse = (string) => {
    let arr1 = [];
    for( let i = string.length - 1; i >= 0; i--) {
        arr1.push(string[i]);
    }
    let newStr =  arr1.join("");
    if (string === newStr) {
        return true;
    } else return false;
}

console.log(reverse("abab"));