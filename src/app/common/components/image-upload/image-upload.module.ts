import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageUploadComponent} from "./image-upload.component";
import {HttpClientModule} from "@angular/common/http";
import {ImageCropperModule} from "ngx-image-cropper";

@NgModule({
  declarations: [ImageUploadComponent],
  imports: [
    CommonModule, HttpClientModule, ImageCropperModule
  ],
  exports:[
    ImageUploadComponent
  ]
})
export class ImageUploadModule { }
