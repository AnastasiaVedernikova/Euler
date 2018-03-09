// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
var n = 20;
var i = 1;
var found = false;

while (found === false) {
    while (n % i === 0 && i <= 20) {
        if (i === 20) {
            found = true;
        }
        i++;
    }
    i = 1;
    n+=1;
}
console.log(n);