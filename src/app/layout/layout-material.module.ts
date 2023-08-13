import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [MatGridListModule, MatToolbarModule, MatCardModule],
  exports: [MatGridListModule, MatToolbarModule, MatCardModule],
})
export class LayoutMaterialModule {}
