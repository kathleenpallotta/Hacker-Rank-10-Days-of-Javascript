function getLetter(s) {
    let letter;
    // Write your code here
    switch(letter){
        case 'a':
        case 'i':
        case 'e':
        case 'o':
        case 'u':
            return 'A';
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            return 'B';
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            return 'C';
        default:
            return 'D';
    }
    return letter;
}