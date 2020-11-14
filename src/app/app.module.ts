import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BubbleSort } from './sortTypes/bubblesort';
import { InsertionSort } from './sortTypes/insertionsort';
import { SelectionSort } from './sortTypes/selectionsort';
import { MergeSort } from './sortTypes/mergesort';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BubbleSort,InsertionSort,SelectionSort,MergeSort],
  bootstrap: [AppComponent]
})
export class AppModule { }
