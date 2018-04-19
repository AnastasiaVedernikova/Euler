// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?
var list =[];
var i=0;
function isPrime(n){
    var isPrime = true;
    for (i=2;i<n;i++){
        if (n%i === 0){
            isPrime = false;
        }
    }
    return isPrime;
}

while (list.length < 10001){
    if (isPrime(i) === true){
        list.push(i);
    }
    i+=1;
}
console.log(list[list.length-1]);
