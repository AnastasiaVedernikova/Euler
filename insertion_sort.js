function insertion_sort(arr) {
    //divides list for two parts(sorted-left, unsorted-right)
    //take number and compare it with each number in left part and place it correctly
    for(i = 1; i < arr.length; i++) {
        // store the current value because it may shift later
        val = arr[i];//1:9
        j = i - 1;//0:3
        while (j >= 0 && arr[j] > val) {
            arr[j+1] = arr[j];
            j--
        }
        arr[j+1] = val
    }
    return arr

}
var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
console.log(insertion_sort(a));

