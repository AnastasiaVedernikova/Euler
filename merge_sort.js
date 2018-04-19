function merge_sort(array) {
    //Divide the unsorted list into n sublists, each containing 1 element
    //Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining
    if (array.length === 1) {
        return array
    } else {
        var split = Math.floor(array.length/2); //divide array for 2 arrays
        var left = array.slice(0, split);
        var right = array.slice(split);

        left = merge_sort(left);
        right = merge_sort(right);

        var sorted = [];

        while (left.length > 0 || right.length > 0) {
            if (right.length === 0 || left[0] <= right[0]) {
                sorted.push(left.shift())

            } else {
                sorted.push(right.shift())
            }
        }

        return sorted
    }
};

console.log(merge_sort([3,6,9,2]));
