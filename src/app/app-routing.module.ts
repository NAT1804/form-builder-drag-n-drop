import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiDimensionalViewComponent } from './multi-dimensional-view/multi-dimensional-view.component';

const routes: Routes = [
  {
    path: '',
    component: MultiDimensionalViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
