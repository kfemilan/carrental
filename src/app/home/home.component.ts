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


  constructor() { }

  ngOnInit(): void {
  }

}
