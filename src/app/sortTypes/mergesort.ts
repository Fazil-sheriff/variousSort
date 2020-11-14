export class MergeSort{
    
    bsort:number[];
    
    mergeSort(aData){
        let asort:number[]=aData;
        let len = asort.length;
        this.sort_merge(asort,0,len-1);
        console.log(this.bsort);
    }

    sort_merge(arr,lb:number,ub:number){
        if(lb < ub){
            var mid:number = (lb+ub)/2;
            mid = Math.floor(mid);
            this.sort_merge(arr,lb,mid);
            this.sort_merge(arr,mid+1,ub);
            this.merge(arr,lb,mid,ub);
        }
    }

    
    merge(arr,lb:number,mid:number,ub:number){
        let i=lb;
        let j=mid+1;
        let k=lb;
        while(i<=mid && j<=ub){
        if(arr[i] <= arr[j])
        {
            this.bsort[k] = arr[i];
            i++;
        }
        else{
            this.bsort[k]=arr[j];
            j++;
        }
        k++;
        }

        if(i > mid){
        while(j<=ub){
            this.bsort[k] = arr[j];
            j++;k++;
        }
        }
        else{
        while(i<=mid){
            this.bsort[k] = arr[i];
            i++;k++;
        }
        }
        
    }  
    
}