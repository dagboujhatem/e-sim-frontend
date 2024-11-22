import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../shared/services/order.service';
import {OrderTypes} from '../../shared/model/order.types';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css'
})
export class MyOrdersComponent implements OnInit {
  orders: OrderTypes[] = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getAllOrdersByUser().subscribe({
        next:
          (data) => {
            this.orders = data;
          },
        error: (error) =>
          console.error('There was an error!', error)
      }
    );
  }
}
