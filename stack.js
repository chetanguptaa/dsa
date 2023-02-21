var letters = []; //this is our stack

var word = "batman";

var rword = "";

// push letter of word into stack
for (var i = 0; i< word.length; i++){
    letters.push(word[i]);
}

for (var i = 0; i< word.length; i++){
    rword = rword + letters.pop();
}

if (rword === word){
    console.log(word + " is a palindrome")
}
else {
    console.log(word + " is not a palindrome")
}

