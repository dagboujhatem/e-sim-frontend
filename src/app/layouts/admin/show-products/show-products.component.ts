import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Products} from '../../../shared/model/product.types';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductService} from '../../../shared/services/product.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrl: './show-products.component.css'
})
export class ShowProductsComponent implements OnInit ,AfterViewInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  editForm: FormGroup;
  products: Products[] = [];
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['img','name','price','category', 'actions'];

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getProducts()
    this.editForm=this.formBuilder.group({
      id: [],
      name: [],
      description: [],
      price: [],
      quantity: [],
      quantityUnit: [],
      image: [],
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
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      quantityUnit: product.quantityUnit,
      image: product.image,

    });
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: response => {
        this.dataSource.data = response;
        console.log('Fetched products:', this.dataSource);
        this.products = response;  // Update the products list
      },
      error: (error) => console.error('Error fetching products:', error)
    });
  }

  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this agent?')) {
      this.productService.deleteProduct(id).subscribe({
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

  }
}
