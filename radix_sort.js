function radix_sort(list) {
    // //Take the least significant digit (or group of bits, both being examples of radices) of each key.
    // Group the keys based on that digit, but otherwise keep the original order of keys. (This is what makes the LSD radix sort a stable sort.)
    // Repeat the grouping process with each more significant digit.
    var base = 10;

    function list_to_buckets(list,iter) {
        var buckets = [];
        for (i = 0; i < base; i++){
            buckets.push([])
        }
        for (i = 0; i < list.length; i++) {
            digit = Math.floor(list[i] / (base ** iter)) % base;
            buckets[digit].push(list[i]);
        }
        return buckets
    }
    function buckets_to_list(buckets) {
        var list = [];
        for (i = 0; i < buckets.length; i++){
            for (j = 0; j < buckets[i].length; j++){
                list.push(buckets[i][j]);
            }
        }
        return list
    }
    var maximum = -10000000;
    for (i = 0; i < list.length; i++){
        if (list[i] > maximum) {
            maximum=list[i];
        }
    }
    var iter = 0;
    while (base ** iter <= maximum) {
        list = buckets_to_list(list_to_buckets(list, iter));
        iter++;
    }
    return list
}
console.log(radix_sort([3,6,9,2]));