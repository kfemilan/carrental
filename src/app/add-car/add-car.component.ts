import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
    const valid = this.validateForm();
    if (valid) {
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
      this.clear()
    } else {
      alert("Please Complete the Form")
    }
  }

  validateForm() {
    var brand = document.forms["addForm"]["brand"].value;
    var color = document.forms["addForm"]["color"].value;
    var model = document.forms["addForm"]["model"].value;
    var price = document.forms["addForm"]["price"].value;
    var image = document.forms["addForm"]["image"].value;

    if (brand == "" || color == "" || model == "" || price == "" || image == ""){
      return false;
    }
    return true;
  }

  clear(){
    document.forms["addForm"]["brand"].value = "";
    document.forms["addForm"]["color"].value = "";
    document.forms["addForm"]["model"].value = "";
    document.forms["addForm"]["price"].value = "";
    document.forms["addForm"]["image"].value = "";
  }

}
