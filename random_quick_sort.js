function random_quick_sort(list) {
    //same as quick sort but choosing randomly pivot el

    function partition(list, l, r, pivot) {
        let tmp = list[pivot];
        list[pivot] = list[r];
        list[r] = tmp;
        let store_index = l;
        for (i = l; i < r; i++) {
            if (list[i] < list[r]) {
                tmp = list[i];
                list[i]  = list[store_index];
                list[store_index] = tmp;
                store_index += 1;
            }
        }
        tmp = list[r];
        list[r]  = list[store_index];
        list[store_index] = tmp;

        return store_index
    }

    function sort(list, l, r) {
        if (l>=r) return list;
        let pivot = Math.floor(l + Math.random() * (r-l+1));
        let new_pivot = partition(list, l, r, pivot);
        sort(list, l, new_pivot-1);
        sort(list, new_pivot+1, r);
    }

    sort(list, 0, list.length-1);
    return list;
}
console.log(random_quick_sort([3,6,9,2]));