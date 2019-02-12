import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {RentalService} from "./rental.service";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RentalGuard implements CanActivate {


  constructor(private rentalService: RentalService, private router: Router) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const rentalId: string = route.params.rentalId;
    return this.rentalService.verifyRentalUser(rentalId).pipe(
      map(() => {return true}),
      catchError(() =>  of(false))
    )
  }
}
