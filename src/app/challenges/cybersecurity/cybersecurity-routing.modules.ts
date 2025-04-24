import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CybersecuritylandingComponent } from './cybersecuritylanding/cybersecuritylanding.component';
import { CybersecurityhomeComponent } from './cybersecurityhome/cybersecurityhome.component';
import { ProblemStatementsDetailsComponent } from './problem-statements-details/problem-statements-details.component';
import { CyberProblemStatementstwoComponent } from './cyber-problem-statementstwo/cyber-problem-statementstwo.component';

const routes: Routes = [
  {
    path: "",
    component: CybersecuritylandingComponent,
    children: [
      {
        path: '',
        component: CybersecurityhomeComponent,
      },
      {
        path: 'cyberhome',
        component: CybersecurityhomeComponent,
      },
      {
        path: 'problemstatements',
        component: CyberProblemStatementstwoComponent,
        title: "APIS Fintech Innovation Challenge | Calling Start-ups in India for Fintech Innovation Challenge"

      },
      {
        path: 'problemstatements/:id',
        component: ProblemStatementsDetailsComponent,
        title: "APIS Fintech Innovation Challenge | Calling Start-ups in India for Fintech Innovation Challenge"

      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CybersecurityRoutingModule { }
