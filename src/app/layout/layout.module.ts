import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { LayoutMaterialModule } from './layout-material.module';

@NgModule({
  declarations: [GridLayoutComponent],
  imports: [CommonModule, LayoutMaterialModule],
  exports: [GridLayoutComponent],
})
export class LayoutModule {}
