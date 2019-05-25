function bubbleSort(array) {
    let noSwaps=false;
    for (let j=0;j<array.length;++j){
        noSwaps=true;
        for (let i=0;i<=array.length-j;++i){
            if (array[i]>array[i+1]){
                const temp=array[i];
                array[i]=array[i+1];
                array[i+1]=temp;
                noSwaps=false;
            }
        }
        if (noSwaps) break;
    }
    return array;
}

const sortedArray=bubbleSort([1,12,10,9,8,7,6,5]);

console.log(sortedArray);
