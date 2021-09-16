import { NgModule } from '@angular/core';
import { AboutService } from './shared/about.service';

import {
  AppSkyModule
} from './app-sky.module';

@NgModule({
  providers: [
    AboutService
  ],
  exports: [
    AppSkyModule
  ]
})
export class AppExtrasModule { }
