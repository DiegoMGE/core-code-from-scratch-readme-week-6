# Diego Orellana - CoreCode Bootcamp 🚀
## Week 6
## Monday Challenges

## Tuesday Challenges
- [Variables](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-6/blob/main/README.md#variables)
- [What is X?](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-6/blob/main/README.md#what-is-x)
- [Several Variables](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-6/blob/main/README.md#several-variables)
- [Reassignment](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-6/blob/main/README.md#reassignment)
- [Assign Variables](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-6/blob/main/README.md#assign-variables)

## Wednesday Challenges
- [Functions](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-6/blob/main/README.md#functions)
- [Multiple Functions](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-6/blob/main/README.md#multiple-functions)
- [Function Calls](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-6/blob/main/README.md#function-calls)
- [What is x? (function version)](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-6/blob/main/README.md#what-is-x-function-version)
- [Parameters](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-6/blob/main/README.md#parameters)

## Thursday Challenges
- [Strings](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-6/blob/main/README.md#strings)
- [String: length](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-6/blob/main/README.md#string-length)
- [String: toUpperCase()](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-6/blob/main/README.md#string-touppercase)
- [String: charAt()](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-6/blob/main/README.md#string-charat)
- [String: indexOf()](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-6/blob/main/README.md#string-indexof)

### Variables
```javascript
let firstname = 'Lata';
```

### What is X?
```javascript
'Geeta'
```

### Several Variables
```javascript
let flower = 'rose';
let tree = 'maple';
```

### Reassignment
```javascript
'Toe'
```

### Assign Variables
```javascript
'Hardy'
```

### Functions
```javascript
function hello() {
    return 'Hello world!';
}
```

### Multiple Functions
```javascript
function a() {
    return 'Hello a!';
}

function b() {
    return 'Hello b!';
}
```

### Function Calls
```javascript
function greet() {
    return 'Haydo!'
}

let salutation = greet();
```

### What is x? (function version)
```javascript
'Hi!'
```

### Parameters
```javascript
function echo(string) {
    return string;
}
echo('Greta');
echo('CO2');
```

### Strings
```javascript
function greet(name) {
    return 'Hello ' + name + '!'
}
greet('Ada');
greet('Grace');
```

### String: length
```javascript
function length(string) {
    return string.length
}
length('sun');
```

### String: toUpperCase()
```javascript
function toCase(string) {
    return string.toLowerCase() + '-' + string.toUpperCase();
}

toCase('Mthatha');
```

### String: charAt()
```javascript
function shortcut(first, second) {
    return first.charAt(0) + second.charAt(0);
}
shortcut('Amensty', 'International');
```

### String: indexOf()
```javascript
function indexOfIgnoreCase(firstString, secondString) {
    let first = firstString.toLowerCase();
    let second = first.indexOf(secondString.toLowerCase());

    return second;
}

console.log(indexOfIgnoreCase('bit', 'it'))
```
