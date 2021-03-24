import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../home/home.component';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  @Output() add = new EventEmitter<Car>();
  constructor() { }

  ngOnInit(): void {
  }

  addCar(brand: string, model: string, color: string, price: string, image: string){
    const car: Car = {
      brand: brand,
      model: model,
      color: color,
      price: +price,
      image: image,
      rentLength: 0,
      returnDate: new Date()
    }
    this.add.emit(car)
    console.log(car)
    
  }

}
