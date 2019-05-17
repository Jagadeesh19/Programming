function insertionSort(array) {
    for (let i=1;i<array.length;++i){
        const temp=array[i];
        for (j=i-1;j>=0 && array[j]>temp;j--){
            array[j+1]=array[j];
        }
        array[j+1]=temp;
    }
    console.log(array);
}

insertionSort([1,12,10,9,8,7,6,5]);
