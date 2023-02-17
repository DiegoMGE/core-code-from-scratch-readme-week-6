/* ==========
* Exercise 1: Strings
========== */
function greet(name) {
    return 'Hello ' + name + '!'
}
greet('Ada');
greet('Grace');

/* ==========
* Exercise 2: String: length
========== */
function length(string) {
    return string.length
}
length('sun');

/* ==========
* Exercise 3: String: toUpperCase()
========== */
function toCase(string) {
    return string.toLowerCase() + '-' + string.toUpperCase();
}

toCase('Mthatha');

/* ==========
* Exercise 4: charAt()
========== */
function shortcut(first, second) {
    return first.charAt(0) + second.charAt(0);
}
shortcut('Amensty', 'International');

/* ==========
* Exercise 5: String: indexOf()
========== */
function indexOfIgnoreCase(firstString, secondString) {
    let first = firstString.toLowerCase();
    let second = first.indexOf(secondString.toLowerCase());

    return second;
}

console.log(indexOfIgnoreCase('bit', 'it'))