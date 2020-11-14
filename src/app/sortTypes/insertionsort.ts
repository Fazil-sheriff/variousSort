export class InsertionSort{
    insertionSort(data){
        let asort:number[] = data;
        let len = asort.length;
        for(let i=1;i<len;i++){
          var key = asort[i];
          var j=i-1;
          while(j>=0 && asort[j]>key){
            asort[j+1] = asort[j];
            j=j-1;
          }
          asort[j+1] = key;
        }
        console.log(asort);
    }
}