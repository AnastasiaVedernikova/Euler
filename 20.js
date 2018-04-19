var bigInt = require("big-integer");
sum = bigInt.zero;
fact = bigInt.one;
for (i = 100; i > 0; i--) {
    fact = bigInt(fact).multiply(i);
}
str = fact.toString();
sum = 0;
for (i in str){
    sum+=parseInt(str[i]);
}
console.log(sum);
