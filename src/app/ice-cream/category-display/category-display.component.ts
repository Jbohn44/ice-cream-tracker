import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.css']
})
export class CategoryDisplayComponent implements OnInit {
  @Input() userId: number;
  categories: Category[] = [];
  categoryAdd: boolean = false;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories(this.userId).subscribe((res) => {
      this.categories = res;
    });
  }

  addClick(){
    console.log("this is clicked")
    this.categoryAdd = true;
  }

  onSubmitted($event){
    this.categoryAdd = false;
  }

  onCancel(){
    this.categoryAdd = false;
  }
}
