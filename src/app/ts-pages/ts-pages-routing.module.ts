import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { TypesComponent } from './types/types.component';

const routes: Routes = [
  {
    path: 'intro', 
    component: IntroComponent
  },
    {
    path: 'types', 
    component: TypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TsPagesRoutingModule { }
