import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemeService } from '@app/core/services/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isDarkTheme$!: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver, private themeService: ThemeService) {
    this.isDarkTheme$ = this.themeService.getDarkTheme();
  }

  toggleTheme(event: any) {
    this.themeService.setDarkTheme((event as any).checked);
  }

}
