import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../../shared/services/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router:Router,
              private categoryService:CategoryService) {
  }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      id: [],
      name: ['',Validators.required],
    })
  }

  onSave() {
    this.categoryService.create(this.categoryForm.value).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/admin/show-categories')
    })

  }
}
