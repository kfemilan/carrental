import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }
  
}

export interface Car{
  brand: string;
  model: string;
  color: string;
  image: string;
  price: number;
  rentLength: number;
  available: boolean;
  returnDate: Date;
}