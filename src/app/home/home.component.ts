import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars = [];
  rented = [];

  constructor(private store: FirebaseApp) { }

  ngOnInit(): void {
    const db = this.store.firestore()
  }

  addCar(){}

  rentCar(){}

  returnCar(){}

}
