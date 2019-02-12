import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditableInputComponent} from "./editable/editable-input/editable-input.component";
import {FormsModule} from "@angular/forms";
import { EditableTextareaComponent } from './editable/editable-textarea/editable-textarea.component';
import { EditableSelectComponent } from './editable/editable-select/editable-select.component';

@NgModule({
  declarations: [EditableInputComponent, EditableTextareaComponent, EditableSelectComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [EditableInputComponent, EditableTextareaComponent, EditableSelectComponent]
})
export class EditableModule { }
