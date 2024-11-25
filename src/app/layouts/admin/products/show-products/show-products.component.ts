import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Products } from '../../../../shared/model/product.types';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../../../shared/services/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CategoryService } from '../../../../shared/services/category.service';
import { Categories } from '../../../../shared/model/category.types';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrl: './show-products.component.css'
})
export class ShowProductsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  editForm: FormGroup;
  products: Products[] = [];
  categories: Categories[] = [];
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['img', 'name', 'price', 'category', 'actions'];
  selectedFile: any;

  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
    this.editForm = this.formBuilder.group({
      id: [],
      name: [],
      description: [],
      price: [],
      quantity: [],
      quantityUnit: [],
      image: [],
      categoryId: [],
    })
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openEdit(targetModal: any, product: Products) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue({
      id: product?.id,
      name: product?.name,
      description: product?.description,
      price: product?.price,
      quantity: product?.quantity,
      quantityUnit: product?.quantityUnit,
      image: product?.image,
      categoryId: product?.category?.id,

    });
  }

  getProducts() {
    this.productService.getAll().subscribe({
      next: response => {
        this.dataSource.data = response;
        this.products = response;  // Update the products list
      },
      error: (error) => console.error('Error fetching products:', error)
    });
  }
  getCategories() {
    this.categoryService.getAll().subscribe({
      next: response => {
        this.categories = response;  // Update the products list
      },
      error: (error) => console.error('Error fetching products:', error)
    });
  }

  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.delete(id).subscribe({
        next: () => {
          console.log('Product deleted successfully.');
          this.getProducts();  // Rechargez la liste après suppression
        },
        error: (error) =>
          console.error('Error deleting pproduct:', error)
      });
    }
  }

  onSave() {
    console.log(this.editForm.value.id)
    console.log(this.selectedFile)
    const fd = new FormData();
    fd.append('id', this.editForm.value.id);
    // fd.append('name', this.editForm.value.name);
    // fd.append('description', this.editForm.value.description);
    // fd.append('price', this.editForm.value.price);
    // fd.append('quantity', this.editForm.value.quantity);
    // // fd.append('quantityUnit', this.editForm.value.quantityUnit);
    // fd.append('categoryId', this.editForm.value.category);
    fd.append('photo', this.selectedFile);
    console.log(fd.valueOf())

    this.productService.editProduct(this.editForm.value).subscribe({
      next: res => {
        console.log(res)
        this.modalService.dismissAll()
        this.getProducts()
      }
    })

  }

  handleFile(file: File): void {
    console.log('Received file from child:', file);
    this.selectedFile = file;
    this.editForm.get('photo')?.setValue(file);
  }

}
