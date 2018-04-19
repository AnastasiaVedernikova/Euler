function quick_sort(a) {
    //choose pivot(first el)
    //compare it with all next elements and move to place after pivot if less(one by one making list of less elements)
    //swap pivot with last of these next elements
    //sort(choose new pivot...) list of these less next elements and continue with list after pivot
    if(a.length <= 1) {
        return a;
    }
    var less = [], greater = [];

    var pivot = a.splice(Math.floor(a.length / 2),1);

    for (var i = a.length - 1 ; i >= 0; i--){
        if ( a[i] <= pivot) {
            less.push(a[i]);
        } else {
            greater.push(a[i]);
        }
    }

    var c = [];
    return c.concat(quick_sort(less), pivot, quick_sort(greater));
};

var a = [3,1,43,5,123,6,231,0];
console.log(quick_sort(a));
