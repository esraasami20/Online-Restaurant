import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/Model/Data.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  orders: Menu[] = [];
  customer_Address: string = JSON.parse(
    localStorage.getItem('customer_Address') || ''
  );
  customer_Name: string = JSON.parse(
    localStorage.getItem('customer_Name') || ''
  );
  customer_Email: string = JSON.parse(
    localStorage.getItem('customer_Email') || ''
  );
  customer_Phone: string = JSON.parse(
    localStorage.getItem('customer_Phone') || ''
  );
  constructor(private router:Router) {}
  counter:number=1;
  decrease(i:any){
    if (this.counter>0)
     this.counter--;
    else
      this.counter = 1;
  }
  increase(i:any){
    this.counter++;
  }
  confirm() {
    alert('^_^ your Order will arrive soon ^_^');
    this.router.navigate(['/'])
  }
  ngOnInit(): void {
    this.orders = JSON.parse(localStorage.getItem('orders') || '{}');
  }
}
