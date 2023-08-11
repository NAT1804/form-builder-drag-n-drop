import { Component } from '@angular/core';
import { MultidimensionalArray } from './multi-dimensional-view/multi-dimensional-array.type';
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
  readonly items: MultidimensionalArray<string> = [
    {
      data: 'Hello',
      children: [
        {
          data: 'here',
        },
        {
          data: 'is',
          children: [{ data: 'some' }, { data: 'structured' }],
        },
        { data: 'Data' },
      ],
    },
    {
      data: 'Bye',
    },
  ];

  // A sample with items:
  // readonly itemsWithObjects: MultidimensionalArray<Service> = [
  //   {
  //     title: "Code Review",
  //     price: 10
  //   },
  //   {
  //     title: "The whole project refactoring",
  //     price: 1000
  //   },
  //   [
  //     {
  //       title: "Add auto prettier and linters on precommit",
  //       price: 50
  //     },
  //     {
  //       title: "Rewrite to react and back",
  //       price: Infinity
  //     }
  //   ]
  // ];

  // readonly itemsWithIcons: MultidimensionalArray<Node> = [
  //   {
  //     title: "Documents",
  //     icon: "https://www.flaticon.com/svg/static/icons/svg/210/210086.svg"
  //   },
  //   [
  //     {
  //       title: "hello.doc",
  //       icon: "https://www.flaticon.com/svg/static/icons/svg/2306/2306060.svg"
  //     },
  //     {
  //       title: "table.csv",
  //       icon: "https://www.flaticon.com/svg/static/icons/svg/2306/2306046.svg"
  //     }
  //   ]
  // ];

  readonly stringifyService = (service: Service) =>
    `${service.title} ($ ${service.price})`;
}
