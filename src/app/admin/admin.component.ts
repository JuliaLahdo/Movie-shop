import { Component, OnInit } from '@angular/core';
import { IOrder } from '../interfaces/IOrder';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  orders: IOrder[];

  constructor(service: DataService) {
    service.fetchOrderData().subscribe((orderData) => {this.orders = orderData; });
  }

  ngOnInit() {
  }

}