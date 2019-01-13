import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {CamelizePipe} from "ngx-pipes";

@Injectable({
  providedIn: 'root'
  }
 )
export class MapService{
  private geoCoder;
  private locationCashe: any = {}
  constructor(private camelizePipe: CamelizePipe){}

  camelize(value: string): string{
    return this.camelizePipe.transform(value)
  }

  casheLocation(location: string, coordinates: any){
    this.locationCashe[this.camelize(location)] = coordinates
  }
  isLocationCashed(location): boolean{
    return this.locationCashe[this.camelize(location)]
  }
  geocodeLocation(location: string): Observable<any>{
    if(!this.geoCoder){
      this.geoCoder = new (<any>window).google.maps.Geocoder();
    }
   return new Observable((observer) => {
     this.geoCoder.geocode({address: location}, (result, status) => {
       if(status === 'OK'){
         const geometry = result[0].geometry.location;
         const coordinates = {lat: geometry.lat(), lng: geometry.lng()}
         this.casheLocation(location, coordinates)
         observer.next(coordinates)
       }else {
         observer.error('Location could not be geocoded')
       }
     })
   })
  }
   getGeoLocation(location: string): Observable<any>{

          if(this.isLocationCashed(location)){
       return of(this.locationCashe[this.camelize(location)]);
      }else{
       return this.geocodeLocation(location);
      }
  }

}
