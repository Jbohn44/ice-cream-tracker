import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  @Output() value: EventEmitter<number> = new EventEmitter();

  sortOptions = [{ Name: "A-Z", Value: 1 }, 
  { Name: "Z-A", Value: 2 }, 
  { Name: "Best Over All", Value: 3 }, 
  { Name: "Worst Over All", Value: 4 },
  { Name: "Newest", Value: 5}];
  constructor() { }

  ngOnInit() {
  }

  onSort(value){
    this.value.emit(value);
  }
}
