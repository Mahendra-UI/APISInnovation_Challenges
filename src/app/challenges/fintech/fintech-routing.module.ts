import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FintechlandingComponent } from './fintechlanding/fintechlanding.component';
import { FintechhomeComponent } from './fintechhome/fintechhome.component';

const routes: Routes = [
  {
    path: "",
    component: FintechlandingComponent,
    children: [
        {
            path: '',
            component: FintechhomeComponent,
        }
    ]
  }
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FintechRoutingModule { }
