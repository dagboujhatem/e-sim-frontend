import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Categories} from '../../../../shared/model/category.types';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {CategoryService} from '../../../../shared/services/category.service';

@Component({
  selector: 'app-show-categories',
  templateUrl: './show-categories.component.html',
  styleUrl: './show-categories.component.css'
})
export class ShowCategoriesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  editForm: FormGroup;
  categories: Categories[] = [];
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(private formBuilder: FormBuilder,
              private categoryService: CategoryService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getCategories()
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
    })
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openEdit(targetModal: any, category: Categories) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue({
      id: category.id,
      name: category.name,
    });
  }

  getCategories() {
    this.categoryService.getAll().subscribe({
      next: response => {
        this.dataSource.data = response;
        console.log('Fetched categories:', this.dataSource);
        this.categories = response;  // Update the categories list
      },
      error: (error) => console.error('Error fetching categories:', error)
    });
  }

  deleteCategory(id: number) {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categoryService.delete(id).subscribe({
        next: () => {
          console.log('Category deleted successfully.');
          this.getCategories();  // Rechargez la liste après suppression
        },
        error: (error) =>
          console.error('Error deleting category:', error)
      });
    }
  }

  onSave() {
    this.categoryService.update(this.editForm.value.id,this.editForm.value).subscribe(res => {
      console.log(res);
      this.getCategories()
      this.modalService.dismissAll()
    })
  }
}
