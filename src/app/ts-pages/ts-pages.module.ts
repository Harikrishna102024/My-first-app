import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TsPagesRoutingModule } from './ts-pages-routing.module';
import { IntroComponent } from './intro/intro.component';
import { TypesComponent } from './types/types.component';
import { BasePageComponent } from './base-page/base-page.component';


@NgModule({
  declarations: [
    IntroComponent,
    TypesComponent,
    BasePageComponent
  ],
  imports: [
    CommonModule,
    TsPagesRoutingModule
  ]
})
export class TsPagesModule { }
