import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedMaterialModule } from './shared-material.module';
import { DragNDropListComponent } from './drag-n-drop-list/drag-n-drop-list.component';

@NgModule({
  declarations: [DragNDropListComponent],
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  exports: [
    CommonModule,
    SharedMaterialModule,
    DragNDropListComponent
  ]
})
export class SharedModule { }
