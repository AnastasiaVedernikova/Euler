
function count(list){
    //creating C list
    let C = [];
    for (i = 0; i <= Math.max.apply(null, list); i++){
        C.push(0);
    }

    //filling it with numbers of each el in list
    for (i=0; i<list.length;i++){
        C[list[i]]+=1;

    }

    B=[];
    //adding to new list B indexes!=0 from C such amount of times as value at this index
    for (i=0;i<C.length;i++){
        if (C[i]!==0){
            for (k=0;k<C[i];k++) {
                B.push(i)
            }
        }
    }

    return B;
}
var a = [3,1,43,5,123,6,231,0];
console.log(count(a));