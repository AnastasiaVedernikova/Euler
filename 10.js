function isPrime(n){
    var isPrime = true;
    for (i=2;i<n;i++){
        if (n%i === 0){
            isPrime = false;
        }
    }
    return isPrime;
}
var sum=0;
for(i=0; i<2000000; i++){
    if (isPrime(i)){
        sum+=i;
    }
}
console.log(sum);