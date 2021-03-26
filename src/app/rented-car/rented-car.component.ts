import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../home/home.component';

@Component({
  selector: 'app-rented-car',
  templateUrl: './rented-car.component.html',
  styleUrls: ['./rented-car.component.css']
})
export class RentedCarComponent implements OnInit {

  @Input() car: Car;
  @Output() ret = new EventEmitter<Car>();
  @Output() extend = new EventEmitter<Car>();

  constructor() { }

  ngOnInit(): void {
  }

  returnCar(){
    const total = this.calculateTotal();
    const payment = prompt("Your Total Is: ₱" + total + ". Please Enter Payment:");
    if (payment != null && +payment >= total) {
      this.car.returnDate = new Date();
      this.car.rentLength = 0;
      const change = +payment - total;
      alert("Your change is ₱" + change + ". Thank you!");
      this.ret.emit(this.car);
    } else if (payment != null && +payment < total){
      const lacking = total - +payment;
      alert("Your payment is insufficient, you lack ₱" + lacking);
    }
    
  }

  calculateTotal(){
    const today = new Date();
    const ret = this.car.returnDate.toDate();
    const difference = today.valueOf() - ret.valueOf();
    const total = this.car.price * this.car.rentLength;
    console.log(difference);
    return difference <= 0 ? total : total*1.15;
  }

}
