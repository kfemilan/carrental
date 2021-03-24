import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../home/home.component';

@Component({
  selector: 'app-available-car',
  templateUrl: './available-car.component.html',
  styleUrls: ['./available-car.component.css']
})
export class AvailableCarComponent implements OnInit {

  @Output() rent = new EventEmitter<any>();
  @Input() car: Car;

  constructor() { }

  ngOnInit(): void {
  }

  rentCar() {
    const duration = prompt("Rent Duration (days)")
    if (duration != null && +duration > 0)
      this.car.rentLength = +duration;
      this.car.returnDate = new Date()
      this.car.returnDate.setDate(this.car.returnDate.getDate() + +this.car.rentLength)
      this.rent.emit(this.car);
  }

}
