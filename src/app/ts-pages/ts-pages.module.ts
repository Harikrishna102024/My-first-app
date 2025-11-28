import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TsPagesRoutingModule } from './ts-pages-routing.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    TsPagesRoutingModule
  ]
})
export class TsPagesModule { }
