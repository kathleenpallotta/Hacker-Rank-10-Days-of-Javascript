/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

let vowels = [];
let consonants = [];

function vowelsAndConsonants(s) {
    for (var i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowels.push(s[i]);
                break;
            default:
                consonants.push(s[i]);
                break;
        }
    }    
    printVowels(vowels);
    printConsonants(consonants);
    
}

function printVowels(vowels) {
    for (var i = 0; i < vowels.length; i++) {
        console.log(vowels[i]);
    }
}
            
function printConsonants(consonants) {
    for (var i = 0; i < consonants.length; i++) {
        console.log(consonants[i]);
    }
}