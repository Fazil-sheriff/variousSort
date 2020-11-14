import { Component } from '@angular/core';
import { BubbleSort } from './sortTypes/bubblesort';
import { InsertionSort } from './sortTypes/insertionsort';
import { SelectionSort } from './sortTypes/selectionsort';
import { MergeSort } from './sortTypes/mergesort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sortings';

  constructor(private bubble_sort : BubbleSort,
              private insertion_sort : InsertionSort,
              private selection_sort : SelectionSort,
              private merge_sort : MergeSort
             ){}

  sortType(aData,name){
    aData =aData.split(',').map(function(i){
        return parseInt(i, 10);
    })
    switch(name){
      case 'bubble':{
        this.bubble_sort.bubbleSort(aData);
        break;
      }
      case 'insertion':{
        console.log('insertion');
        this.insertion_sort.insertionSort(aData);
        break;
      }
      case 'selection':{
        console.log('selection');
        this.selection_sort.selectionSort(aData);
        break;
      }
      case 'merge':{
        console.log('merge');
        this.merge_sort.mergeSort(aData);
        break;
      }
    }
    
  }
  
  binarySearch(data){
    //var sort_arr:number[];
    let sort_arr:Array<number>=[1,6,8,13,56,76,77,85,97];
    //sort_arr = this.bsort;
    let found=false;
    let len = sort_arr.length;
    let l=0;
    let r=len-1;
    while(l<r){
      let mid = Math.floor((l+r)/2);
      if(data == sort_arr[mid]){
        console.log('found');
        found=true;
        break;
      }
      else if(data < sort_arr[mid]){
        r = mid-1;
      }
      else{
        l=mid+1;
      }
    }
    if(!found){
      console.log('not found');
    }
    
  }
  
}
