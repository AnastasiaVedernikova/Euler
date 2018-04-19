var seq=[];
var len=0;
var start=0;
for(var j = 5; j < 1000000; j++)
{
    i=j;
    while (i !== 1)
    {
        if (i % 2 === 0)
        {
            i /= 2;
            seq+=i;
        }
        else
        {
            i = (3 * i) + 1;
            seq+=i;
        }
    }
    if(seq.length > len)
    {
        len = seq.length;
        start = j;
    }
    seq=[];
}
console.log(start, len);
//837799 3380
