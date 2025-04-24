import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CivilsupplieslandingComponent } from './civilsupplieslanding/civilsupplieslanding.component';
import { CivilsupplieshackathonhomeComponent } from './civilsupplieshackathonhome/civilsupplieshackathonhome.component';
import { CivilsuppliesproblemstatementsComponent } from './civilsuppliesproblemstatements/civilsuppliesproblemstatements.component';
import { CivilsuppliesdetailedproblemstatementsComponent } from './civilsuppliesdetailedproblemstatements/civilsuppliesdetailedproblemstatements.component';

const routes: Routes = [
    {
      path: "",
      component: CivilsupplieslandingComponent,
      children: [
        {
          path: '',
          component: CivilsupplieshackathonhomeComponent,
        },
        {
          path: 'civilhome',
          component: CivilsupplieshackathonhomeComponent,
        },
        {
          path: 'problemstatements',
          component: CivilsuppliesproblemstatementsComponent,
          title: "APIS Fintech Innovation Challenge | Calling Start-ups in India for Fintech Innovation Challenge"
  
        },
        {
          path: 'problemstatements/:id',
          component: CivilsuppliesdetailedproblemstatementsComponent,
          title: "APIS Fintech Innovation Challenge | Calling Start-ups in India for Fintech Innovation Challenge"
  
        },
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CivilsuppliesRoutingModule { }
