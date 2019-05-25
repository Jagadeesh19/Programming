function binarySearch(array,value) {
    console.log(array);
    let start=0;
    let end=array.length-1;
    let mid=(start+end)/2;
    mid=Math.floor(mid);

    console.log(start,mid,end);

    while(start<end){
        if (array[mid]>value){
            end=mid-1;
        }
        else if (array[mid]<value){
            start=mid+1;
        }
        else{
            break;
        }
        mid=(start+end)/2;
        mid=Math.floor(mid);

        console.log(start,mid,end);
    }

    if (value===array[mid]){
        return mid;
    }
    return -1;
}

const sortedArray=binarySearch([23,56,76,98,112,256,766],98);

console.log(sortedArray);
