import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  @Input() userId: number;
  @Output() submitted: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  category: Category;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.category = {
      CategoryName: "",
      UserId: this.userId
    };
  }

  addCategory(){
  
  }

  onSubmit(){
    this.categoryService.addCategory(this.category).subscribe((res) => {
      this.submitted.emit(res);
    });
  }

  onCancel(){
    this.cancel.emit();
  }
}
