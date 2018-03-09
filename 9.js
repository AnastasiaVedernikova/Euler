for (c=0; c<1000; c+=1){
    for (b=0; b<c; b+=1){
        for (a=0; a<b; a+=1){
            if (a+b+c === 1000 && Math.pow(a,2)+Math.pow(b,2)=== Math.pow(c,2)){
                console.log(a*b*c);
                break;
            }
        }
    }
}