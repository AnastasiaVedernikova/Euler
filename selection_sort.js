function selection_sort(list)
{
    //divides list for two parts(sorted-left and  unsorted - right)
    //looks for min in list and move it to start
    //then repeat it but ignoring first element
    for (i=0; i<list.length; i++) {
        var min_list = i;
        for (j=i+1; j<list.length; j++) {
            if (list[j] < list[min_list]) {
                min_list=j;
            }
        }
        if (min_list!== i){
            let tmp = list[i];
            list[i] = list[min_list];
            list[min_list] = tmp;
        }
    }

    return list
}
console.log(selection_sort([3,6,9,2]));
