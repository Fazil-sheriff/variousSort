export class BubbleSort{
    bubbleSort(data){
        let asort:number[] = data;
        let len = asort.length;
        for(let i=0;i<len-1;i++){
            let flag =0 ;
            for(let j=0;j<len-1-i;j++){
                if(asort[j]>asort[j+1]){
                    var temp = asort[j];
                    asort[j] = asort[j+1];
                    asort[j+1] = temp;
                    flag=1;
                }
            }
        }
        console.log(asort);
    }
}