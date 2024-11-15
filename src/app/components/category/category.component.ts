import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  data: any[] = []; // This will store the categories

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getAllCAtegories();
  }

  getAllCAtegories() {
    this.categoryService.getCategories().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
}
