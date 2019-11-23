const numbers = [12, 23, 62, 34, 19, 40, 4, 9];

console.log(numbers.filter(function(n: number){
    return n > 30;
}));

//or use shorthand function notation
//also called arrow function
console.log(
    numbers.filter(n => n> 30)
);