var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function bubble_sort(a)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) { //taking 2 elements and comparing them, if need, swap them
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return a;
}

console.log(bubble_sort(a));
