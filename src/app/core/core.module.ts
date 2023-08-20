import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ThemeService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        `CoreModule has already been loaded. Import CoreModule modules in the AppModule only.`
      );
    }
  }
}
