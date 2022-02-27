//Trolls are attacking your comments section!
function disemvowel(str) {
    var newStr = "",
        i;
//run the cycle
    for (i = 0; i < str.length; i++) {
//method .includes() determines whether one string is inside another by returning true або false
        if ("aeiou".includes(str[i].toLowerCase())) continue; //the continue instruction stops the existing iteration and resumes the cycle from the new one
        newStr += str[i];
    }
    return newStr;
}

console.log(disemvowel("This website is for losers LOL!"));
