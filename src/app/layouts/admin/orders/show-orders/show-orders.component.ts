import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { OrderTypes } from '../../../../shared/model/order.types';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { OrderService } from '../../../../shared/services/order.service';

@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrl: './show-orders.component.css'
})
export class ShowOrdersComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  editForm: FormGroup;
  orders: OrderTypes[] = [];
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['img', 'totalPrice', 'payment', 'user', 'products', 'status', 'actions'];

  constructor(private formBuilder: FormBuilder,
    private orderService: OrderService,
    private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getOrders()
    this.editForm = this.formBuilder.group({
      id: [],
      totalPrice: [],
      payment: [],
      user: [],
      products: [],
      status: [],
    })
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  openEdit(targetModal: any, order: OrderTypes) {
    console.log(order);

    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue({
      id: order.id,
      totalPrice: order.totalPrice,
      payment: order.payment,
      user: order.user,
      products: order.products,
      status: order.status,

    });
  }

  getOrders() {
    this.orderService.getOrders().subscribe({
      next: response => {
        this.dataSource.data = response;
        this.orders = response;  // Update the orders list
      },
      error: (error) => console.error('Error fetching orders:', error)
    });
  }

  onSave() {
    this.orderService.editOrder(this.editForm.value.id, this.editForm.value).subscribe(res => {
      console.log(res);
      this.getOrders()

      this.modalService.dismissAll()
    })
  }
}
