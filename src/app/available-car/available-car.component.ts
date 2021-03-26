import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../home/home.component';

@Component({
  selector: 'app-available-car',
  templateUrl: './available-car.component.html',
  styleUrls: ['./available-car.component.css']
})
export class AvailableCarComponent implements OnInit {

  @Output() rent = new EventEmitter<Car>();
  @Output() delete = new EventEmitter<Car>();
  @Input() car: Car;

  constructor() { }

  ngOnInit(): void {
  }

  rentCar() {
    const duration = prompt("Rent Duration (days)")
    if (duration != null && +duration >= 0){
      this.car.rentLength = +duration;
      this.car.returnDate = new Date()
      this.car.returnDate.setDate(this.car.returnDate.getDate() + +this.car.rentLength)
      this.rent.emit(this.car);
    } else if (+duration < 0) {
      alert("Rental days must be 0 or more")
    } else {
      alert("Wrong input")
    }
  }

  deleteCar() {
    const conf = confirm("Are you sure you want to delete this vehicle?")
    if (conf){
      this.delete.emit(this.car);
    }
  }

}
