import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  @Input() userId: number;
  category: Category;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  addCategory(){
    this.categoryService.addCategory(this.category).subscribe(x => {
      x;
    });
  }
}
