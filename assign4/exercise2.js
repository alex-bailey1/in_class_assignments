function reverse(x)
{
    str_x = x.toString(10);
    str_x = str_x.split("").reverse().join("");
    return parseInt(str_x, 10);
}

var val = 231756;
console.log("input: " + val);
console.log("output: " + reverse(val));