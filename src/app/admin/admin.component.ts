import { Component, OnInit } from '@angular/core';
import { IExtendedOrder } from '../interfaces/IOrder';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  extendedOrders: IExtendedOrder[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchOrderData().subscribe((orderData) => {


      for (let i = 0; i < orderData.length; i++) {
      this.extendedOrders.push({ order: orderData[i], movieNames: []});
      
      let orderRows = orderData[i].orderRows;
      
        for (let j = 0; j < orderRows.length; j++) {
        let productId = orderRows[j].productId;
        
          this.dataService.fetchSingleMovie(productId).subscribe((data) => {
          this.extendedOrders[i].movieNames.push(data.name);
        
          });
        }
      }
    });
  }

}