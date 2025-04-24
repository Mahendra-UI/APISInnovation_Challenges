import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountdownComponent } from 'ngx-countdown';
import { BannertwoComponent } from './bannertwo/bannertwo.component';
import { CommonsectionComponent } from './commonsection/commonsection.component';
import { DatasecuritychallengeComponent } from './datasecuritychallenge/datasecuritychallenge.component';
import { DetailsoneComponent } from './detailsone/detailsone.component';
import { DownloadComponent } from './download/download.component';
import { EcopartnersComponent } from './ecopartners/ecopartners.component';
import { HeadertwoComponent } from './headertwo/headertwo.component';
import { HomeComponent } from './home/home.component';
import { ProblemstatementsoneComponent } from './problemstatementsone/problemstatementsone.component';
import { RegistrationComponent } from './registration/registration.component';
import { StatementonedetailsComponent } from './statementonedetails/statementonedetails.component';
import { WebsitelandingComponent } from './websitelanding/websitelanding.component';
import { LoginComponent } from './login/login.component';
import { ChallengesformComponent } from './challengesform/challengesform.component';
import { CivilsupplieshackathonComponent } from './civilsupplieshackathon/civilsupplieshackathon.component';
import { CivilsuppliesqueriesComponent } from './civilsuppliesqueries/civilsuppliesqueries.component';



const routes: Routes = [
    {
        path: "", component: WebsitelandingComponent,
        children: [
            {
                path: "",
                component: HomeComponent,
                title: "AP Innovation Society Innovation Challenges | Grand Hackathons"
            }
            ,
            {
                path: "home",
                component: HomeComponent,
                title: "AP Innovation Society Innovation Challenges | Grand Hackathons"
            }
            ,
            {
                path: "about",
                component: HomeComponent,
                title: "AP Innovation Society Innovation Challenges | Grand Hackathons"
            },
            {
                path: "challengesform",
                component: ChallengesformComponent,
                title: "AP Innovation Society Innovation Challenges | Grand Hackathons"
            } 
            ,
            {
                path: "civilsupplieshackathon",
                component: CivilsupplieshackathonComponent,
                title: "AP Innovation Society Innovation Challenges | Grand Hackathons"
            },
            {
                path: "civilsuppliesqueries",
                component: CivilsuppliesqueriesComponent,
                title: "AP Innovation Society Innovation Challenges | Grand Hackathons"
            },
            {
                path: "contactus",
                component: HomeComponent,
                title: "AP Innovation Society Innovation Challenges | Grand Hackathons"
            }
            ,
            {
                path: "download-brouchure",
                component: DownloadComponent
            }
            ,
            {
                path: 'reg',
                component: RegistrationComponent
            },
            {
                path: 'details',
                component: DetailsoneComponent
            },
            {
                path: 'fintech',
                component: BannertwoComponent,
                title: "APIS Fintech Innovation Challenge | Calling Start-ups in India for Fintech Innovation Challenge"
            },
            {
                path: 'datasecuritychallenges',
                component: DatasecuritychallengeComponent,
                title: "APIS Data Security Innovation Challenge | Calling Start-ups in India for Data Security Innovation Challenge"
            },
            {
                path: 'problemstatements',
                component: BannertwoComponent,
                title: "APIS Fintech Innovation Challenge | Calling Start-ups in India for Fintech Innovation Challenge"

            },
            {
                path: 'eligibility',
                component: BannertwoComponent,
                title: "APIS Fintech Innovation Challenge | Calling Start-ups in India for Fintech Innovation Challenge"
            },

            
            {
                path: 'countdown',
                component: CountdownComponent
            },

            {
                path: 'problemstatement/:id',
                component: StatementonedetailsComponent,
                title: "APIS Fintech Innovation Challenge | Calling Start-ups in India for Fintech Innovation Challenge"

            },
            {
                path: 'headtwo',
                component: HeadertwoComponent
            },
            {
                path: 'commonsection',
                component: CommonsectionComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },

            {
                path: 'bannertwo',
                component: BannertwoComponent
            },
            {
                path: 'eco',
                component: EcopartnersComponent
            }
        
        ]
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebsiteRoutingModule { }
