import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { BREAKPOINT } from '@core/constants/breakpoints';
import { Tile } from '@app/data/models/tile.interface';
import { ThemeService } from '@app/core/services/theme.service';
import { themes } from '@app/core/constants/themes';

@Component({
  selector: 'afb-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeLayoutComponent implements OnInit {
  destroyed = new Subject<void>();
  currentScreenSize!: string;

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, BREAKPOINT.XSMALL],
    [Breakpoints.Small, BREAKPOINT.SMALL],
    [Breakpoints.Medium, BREAKPOINT.MEDIUM],
    [Breakpoints.Large, BREAKPOINT.LARGE],
    [Breakpoints.XLarge, BREAKPOINT.XLARGE],
  ]);

  tiles: Tile[] = [
    {text: 'Header', cols: 12, rows: 1, color: 'lightblue'},
    {text: 'RSidebar', cols: 2, rows: 5, color: 'lightgreen'},
    {text: 'Main', cols: 8, rows: 5, color: 'lightpink'},
    {text: 'LSidebar', cols: 2, rows: 5, color: '#DDBDF1'},
    {text: 'Footer', cols: 12, rows: 1, color: 'red'},
  ];

  colLayout: number = 12;

  currentTheme$!: Observable<string>;

  ngOnInit(): void {

  }

  constructor(private breakpointObserver: BreakpointObserver, private cdr: ChangeDetectorRef, private themeService: ThemeService) {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
            this.cdr.markForCheck();
          }
        }
      });

      this.currentTheme$ = this.themeService.getDarkTheme().pipe(
        map((isDarkTheme: boolean) => {
          const [lightTheme, darkTheme] = themes;
          const currentTheme = isDarkTheme ? darkTheme.name : lightTheme.name;
          return currentTheme;
        })
      )

  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

}
