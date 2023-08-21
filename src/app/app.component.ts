import { Component } from '@angular/core';
import { MultidimensionalArray } from './modules/home/page/multi-dimensional-view/multi-dimensional-array.type';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
interface Service {
  readonly title: string;
  readonly price: number;
}

interface Node {
  readonly title: string;
  readonly icon: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'form-builder-drag-n-drop';
}
