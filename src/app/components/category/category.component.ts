import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  myData:any; // This will store the categories

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getAllCAtegories();
  }

  getAllCAtegories() {
    this.categoryService.getCategories().subscribe(
      (response: any) => {
        this.myData = response.data || []; // Replace 'categories' with the actual property name
        console.log('Data:', this.myData);
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }


}
