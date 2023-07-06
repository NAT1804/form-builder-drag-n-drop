import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { MultidimensionalArray } from './multi-dimensional-array.type';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'multi-dimensional-view',
  templateUrl: './multi-dimensional-view.component.html',
  styleUrls: ['./multi-dimensional-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiDimensionalViewComponent<T> implements OnInit {

  @Input()
  value: MultidimensionalArray<T> = [];

  @Input()
  content: PolymorpheusContent = "";

  @Input()
  stringify: (item: T) => string = (item: T) => String(item);

  @HostBinding("class._array")
  get isArray(): boolean {
    return Array.isArray(this.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
