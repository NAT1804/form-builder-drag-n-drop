import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragExit,
  CdkDragPlaceholder,
  CdkDropList,
  copyArrayItem,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'afb-drag-n-drop-list',
  templateUrl: './drag-n-drop-list.component.html',
  styleUrls: ['./drag-n-drop-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragNDropListComponent implements OnInit {
  components = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  constructor() { }

  ngOnInit(): void { }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  exit(event: CdkDragExit<string[]>) {
    console.log('event', event.container);
    // this.components.splice(event.container.getItemIndex(event.item) + 1, 0, { ... event.item.data, temp: true });
  }

}
