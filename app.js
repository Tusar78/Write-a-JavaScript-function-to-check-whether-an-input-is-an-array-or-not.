let isArry = (input) => {
    return Array.isArray(input);
}
console.log(isArry('Innovation Teach')) // False 
console.log(isArry([1,2,3,4])) // True


// Another Way 

let isArray2 = (inp) => {
    if (toString.call(inp) == '[object Array]') {
        return true;
    } else {
        return false;
    }
}

console.log(isArray2('Innovation Teach')) // False
console.log(isArray2(['Innovation', 'Teach'])) // True


// Another Way

let isArray3 = (inp) => {
    if (inp.constructor.toString().indexOf('Array') > -1) {
        return true;
    } else {
        return false;
    }
}

console.log(isArray3('Innovation Teach')) // False
console.log(isArray3(['Innovation', 'Teach'])) // True