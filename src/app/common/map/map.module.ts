import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapComponent} from "./map.component";
import {AgmCoreModule} from "@agm/core";
import {MapService} from "./map.service";
import {CamelizePipe} from "ngx-pipes";

@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBOFm3jG7zGC6bnRCw2fBhmYcYPJqjeZfQ\n'
    })
  ],
  providers: [MapService, CamelizePipe]
})
export class MapModule { }
