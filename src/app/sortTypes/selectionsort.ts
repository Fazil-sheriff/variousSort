export class SelectionSort{
    selectionSort(data){
        let asort:number[] = data;
        let len = asort.length;
        for(let i=0;i<len-1;i++){
        let min = i;
        for(let j=i+1;j<len;j++){
            if(asort[j]<asort[min]){
            min = j;
            }
        }
        let temp = asort[i];
        asort[i] = asort[min];
        asort[min] = temp; 
        }
        console.log(asort);
    }
}