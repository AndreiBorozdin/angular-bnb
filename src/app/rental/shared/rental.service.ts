import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Rental} from "./rental.model";

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  constructor(private http: HttpClient){}
   getRentals(): Observable<any>{
    return this.http.get('/api/v1/rentals')
  }
  getRentalById(rentalId: string): Observable<any>{
    return this.http.get('/api/v1/rentals/' + rentalId)
  }
  getRentalsByCity(city:string): Observable<any>{
    return this.http.get(`/api/v1/rentals?city=${city}`)
  }
  createRental(rental: Rental): Observable<any>{
     return this.http.post('/api/v1/rentals', rental)
  }
}
