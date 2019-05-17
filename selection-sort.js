function selectionSort(array) {
    for (let j=0;j<array.length;++j){
        let min=j;
        for (let i=j+1;i<array.length;++i){
            if (array[min]>array[i]) min=i;
        }
        if (j!==min){
            const temp=array[min];
            array[min]=array[j];
            array[j]=temp;
        }
    }
    console.log(array);
}

selectionSort([9,8,7,6,5,4,4,3,2,1,5]);
