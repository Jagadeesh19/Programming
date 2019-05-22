function pivot(array,start=0,end=array.length-1) {
    const pivot=array[start];
    let swapIndex=start;

    for (let i=start+1;i<=end;++i){
        if (array[i]<pivot){
            swapIndex++;
            const temp=array[swapIndex];
            array[swapIndex]=array[i];
            array[i]=temp;
        }
    }
    const temp=array[start];
    array[start]=array[swapIndex];
    array[swapIndex]=temp;
    return swapIndex
}


function quickSort(array, start = 0, end = array.length - 1) {
    if (start < end){
        let pivotIndex=pivot(array,start,end);

        quickSort(array,start,pivotIndex-1);

        quickSort(array,pivotIndex+1,end);
    }

    return array
}

const sortedArray=quickSort([1,12,10,9,8,7,6,5,3]);

console.log(sortedArray);
