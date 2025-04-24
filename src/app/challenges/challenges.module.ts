import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengesRoutingModule } from './challenges-routing.modules';
import { ChallengeslandingComponent } from './challengeslanding/challengeslanding.component';



@NgModule({
  declarations: [
    ChallengeslandingComponent
  ],
  imports: [
    CommonModule,
    ChallengesRoutingModule
  ]
})
export class ChallengesModule { }
