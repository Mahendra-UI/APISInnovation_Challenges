import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleformtestingComponent } from './googleformtesting/googleformtesting.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  

  {
    path: "",
    loadChildren: () => import("./website/website.module").then(m => m.WebsiteModule),
    title: "AP Innovation Society Innovation Challenges | Grand Hackathons"
  },
  {
    path: "home",
    loadChildren: () => import("./website/website.module").then(m => m.WebsiteModule),
    title: "AP Innovation Society Innovation Challenges | Grand Hackathons"
  },
  {
    path: "challenges",
    loadChildren: () => import("./challenges/challenges.module").then(m => m.ChallengesModule),
    title: "AP Innovation Society Innovation Challenges | Challenges"
  },
  {
    path: "cybersecurity",
    loadChildren: () => import("src/app/challenges/cybersecurity/cybersecurity.module").then(m => m.CybersecurityModule),
    // loadChildren: () => import("./cybersecurity/cybersecurity.module").then(m => m.CybersecurityModule),
    title: "AP Innovation Society Innovation Challenges | Challenges"
  },
  {
    path: 'googleformdata',
    component: GoogleformtestingComponent
  },
  {
    path: "challengesadmin",
    loadChildren: () => import("./challengesadmin/challengesadmin.module").then(m => m.ChallengesadminModule),
    canActivate: [AuthGuard]
  },
  {
    path: "**",
    redirectTo: '',
    loadChildren: () => import("./website/website.module").then(m => m.WebsiteModule),
    title: "AP Innovation Society Innovation Challenges | Grand Hackathons"
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
