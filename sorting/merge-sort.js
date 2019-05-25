function mergeSort(array) {
    const length=array.length;
    if (length<=1) return array;
    const half=Math.floor(length/2);
    const arr1=array.slice(0,half);
    const arr2=array.slice(half,length);
    const sortedArr1=mergeSort(arr1);
    const sortedArr2=mergeSort(arr2);
    return merge(sortedArr1,sortedArr2);
}

const sortedArray=mergeSort([1,12,10,9,8,7,6,5,3]);

console.log(sortedArray);

function merge(arr1, arr2) {
    let array=[];
    let p1=0;
    let p2=0;
    while(p1<arr1.length && p2<arr2.length){
        if (arr1[p1]<arr2[p2]){
            array.push(arr1[p1]);
            p1++;
        }
        else{
            array.push(arr2[p2]);
            p2++;
        }
    }
    if (p1==arr1.length){
        for (let i=p2;i<arr2.length;++i){
            array.push(arr2[i]);
        }
    }
    else{
        for (let i=p1;i<arr1.length;++i){
            array.push(arr1[i]);
        }
    }

    return array;
}
