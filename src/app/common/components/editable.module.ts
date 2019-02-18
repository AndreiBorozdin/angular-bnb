import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditableInputComponent} from "./editable/editable-input/editable-input.component";
import {FormsModule} from "@angular/forms";
import { EditableTextareaComponent } from './editable/editable-textarea/editable-textarea.component';
import { EditableSelectComponent } from './editable/editable-select/editable-select.component';
import { EditableImageComponent } from './editable/editable-image/editable-image.component';
import {ImageUploadModule} from "./image-upload/image-upload.module";


@NgModule({
  declarations: [EditableInputComponent, EditableTextareaComponent, EditableSelectComponent, EditableImageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ImageUploadModule
  ],
  exports: [EditableInputComponent, EditableTextareaComponent, EditableSelectComponent, EditableImageComponent]
})
export class EditableModule { }
