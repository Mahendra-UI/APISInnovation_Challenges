import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengesadminhomeComponent } from './challengesadminhome/challengesadminhome.component';
import { ChallengesadminlandingComponent } from './challengesadminlanding/challengesadminlanding.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: "", component: ChallengesadminlandingComponent,
    canActivate: [AuthGuard],
    children: [
        {
            path: "",
            component: ChallengesadminhomeComponent,
            canActivate: [AuthGuard]
        },
        {
          path: "challengesadminhome",
          component: ChallengesadminhomeComponent,
          canActivate: [AuthGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengesadminRoutingModule { }
