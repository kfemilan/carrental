import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { carConverter, CarService } from '../car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars = this.store.collection('cars').valueChanges({idField: 'id'});
  rented = this.store.collection('rented').valueChanges({idField: 'id'});

  constructor(private store: AngularFirestore) { }

  ngOnInit(): void {
  }

  addCar(car: Car){
    console.log(car)
    this.store.collection('cars').add(car)
    console.log(this.cars)
  }

  rentCar(car: Car){
    this.store.collection('cars').doc(car.id).delete()
    this.store.collection('rented').add(car)
  }

  returnCar(car: Car){
    this.store.collection('rented').doc(car.id).delete()
    this.store.collection('cars').add(car)
  }

}

export interface Car{
  id?: string;
  brand: string;
  model: string;
  color: string;
  image: string;
  price: number;
  rentLength: number;
  returnDate: Date;
}