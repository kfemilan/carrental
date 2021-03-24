import { Injectable } from '@angular/core';
// import { FirebaseApp } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private store: AngularFirestore) { }
  
  getCars(){
  
  }

}



export var carConverter = {
  toFirestore: function(car) {
    return {
      brand: car.brand,
      model: car.model,
      color: car.color,
      image: car.image,
      price: car.price,
      rentLength: car.rentLength,
      available: car.available,
      returnDate: car.returnDate
    };
  },
  fromFirestore: function(snapshot, options){
    const data = snapshot.data(options);
    return { brand: data.brand, 
      model: data.model, 
      color: data.color, 
      image: data.image, 
      price: data.price, 
      rentLength: data.rentLength, 
      available: data.available, 
      returnDate: data.returnDate 
    }
  }
}
