import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../../shared/services/product.service';
import {CategoryService} from '../../../../shared/services/category.service';
import {MatTableDataSource} from '@angular/material/table';
import {Categories} from '../../../../shared/model/category.types';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  dataSource = new MatTableDataSource();
  categories: Categories[] = [];

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService,
              private router: Router,
              private categoryService: CategoryService,
  ) {
  }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: ['', Validators.required],
    })
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAll().subscribe({
      next: response => {
        this.dataSource.data = response;
        this.categories = response;  // Update the products list
      },
      error: (error) => console.error('Error fetching products:', error)
    });
  }

  onSave() {
    this.productService.addProduct(this.productForm.value).subscribe(res => {
      console.log(res)
      this.router.navigateByUrl('/admin/show-products')
    })
  }
}
