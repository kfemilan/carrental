import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarService } from './car.service';
import { HomeComponent } from './home/home.component';
import { AvailableCarComponent } from './available-car/available-car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { RentedCarComponent } from './rented-car/rented-car.component';

const config = {
  apiKey: "AIzaSyCztVRA4GItRkO4ctaL4RRnMO9J6JDEib8",
  authDomain: "car-rental-3ed81.firebaseapp.com",
  projectId: "car-rental-3ed81",
  storageBucket: "car-rental-3ed81.appspot.com",
  messagingSenderId: "556086805256",
  appId: "1:556086805256:web:2758ca6a97a9e380dda2bd",
  measurementId: "G-43JNGM8H9Q"
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AvailableCarComponent,
    AddCarComponent,
    RentedCarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
