function stringSearch(string, pattern) {
    let count;
    let i=0;
    for (let j=0;j<string.length;++j){

        if (i==0){
            if (pattern[0]==string[j]){
                count=j;
                i++;
                if (j==string.length-1) return j;
            }
        }
        else{
            if (string[j]!=pattern[i]){
                if (pattern[i]==undefined) return count;
                i=0;
                j--;
            }
            else{
                if (i==pattern.length-1) return count;
                i++;
            }
        }
    }
    return -1;

}

const a=stringSearch("lorie loled","lol");

console.log(a);
