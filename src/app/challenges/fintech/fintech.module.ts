import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FintechlandingComponent } from './fintechlanding/fintechlanding.component';
import { FintechhomeComponent } from './fintechhome/fintechhome.component';
import { FintechRoutingModule } from './fintech-routing.module';



@NgModule({
  declarations: [
    FintechlandingComponent,
    FintechhomeComponent
  ],
  imports: [
    CommonModule,
    FintechRoutingModule
  ]
})
export class FintechModule { }
