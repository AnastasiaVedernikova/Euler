// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

    // start with the largest number from two 3-digit numbers
    var n = 999 * 999;
    var nStr;
    var nStrReversed;
    var sqrt;
    var divisor;
    while (n > 100000) {
        nStr = n + '';
        nStrReversed = nStr.split('').reverse().join('');
        if (nStr === nStrReversed) {
            // find the sqrt
            // one of the factors has to be less than the sqrt
            // so this reduces the number of iterations needed
            sqrt = Math.sqrt(n);
            // make it an integer
            divisor = Math.floor(sqrt);
            // while n / divisor leaves a remainder
            // and the divisor greater than 3-digits
            // and the other factor less than 4-digits
            while (n % divisor !== 0 && divisor >= 100 && n / divisor <= 999) {
                divisor--;
            }
            // if n / divisor leaves no remainder
            // and the divisor is greater than 3-digits
            // and thh other factor is less than 4-digits
            if (n % divisor === 0 && divisor >= 100 && n / divisor <= 999) {
                console.log(n);
            }
        }
        n--;
    }
