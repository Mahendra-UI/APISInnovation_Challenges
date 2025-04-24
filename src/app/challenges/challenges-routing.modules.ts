import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengeslandingComponent } from './challengeslanding/challengeslanding.component';
import { FintechlandingComponent } from './fintech/fintechlanding/fintechlanding.component';

const routes: Routes = [
  {
    path: "",
    component: ChallengeslandingComponent,
    children: [
        {
            path: '',
            component: ChallengeslandingComponent,
        },
        {
            path: 'fintech',
            loadChildren: () => import("./fintech/fintech.module").then(m => m.FintechModule),
            title: "AP Innovation Society | Fintech Innovation Challenge 2022"
        },
        {
          path: 'cybersecurity',
          loadChildren: () => import("./cybersecurity/cybersecurity.module").then(m => m.CybersecurityModule),
          title: "AP Innovation Society | Cyber Security Challenge 2023"
      },
      {
        path: 'civilsupplies',
        loadChildren: () => import("./civilsupplies/civilsupplies.module").then(m => m.CivilsuppliesModule),
        title: "AP Innovation Society | Civil Supplies Challenge 2025"
    },
      
    ]
  }
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengesRoutingModule { }
