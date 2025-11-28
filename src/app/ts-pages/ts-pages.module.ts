import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TsPagesRoutingModule } from './ts-pages-routing.module';
import { IntroComponent } from './intro/intro.component';


@NgModule({
  declarations: [
    IntroComponent
  ],
  imports: [
    CommonModule,
    TsPagesRoutingModule
  ]
})
export class TsPagesModule { }
