import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CybersecuritylandingComponent } from './cybersecuritylanding/cybersecuritylanding.component';
import { CybersecurityhomeComponent } from './cybersecurityhome/cybersecurityhome.component';
import { CybersecurityRoutingModule } from './cybersecurity-routing.modules';
import { HeadertwoComponent } from '../../website/headertwo/headertwo.component';
import { WebsiteModule } from 'src/app/website/website.module';
import { RouterModule } from '@angular/router';
import { ProblemStatementsComponent } from './problem-statements/problem-statements.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProblemStatementsDetailsComponent } from './problem-statements-details/problem-statements-details.component';
import { CyberUpcomingeventsComponent } from './cyber-upcomingevents/cyber-upcomingevents.component';
import { CyberProblemStatementstwoComponent } from './cyber-problem-statementstwo/cyber-problem-statementstwo.component';
import { CyberEsteemedCommetteeMembersComponent } from './cyber-esteemed-commettee-members/cyber-esteemed-commettee-members.component';
import { CyberEcosystemPartnersComponent } from './cyber-ecosystem-partners/cyber-ecosystem-partners.component';
import { CyberhometwoComponent } from './cyberhometwo/cyberhometwo.component';
import { CyberinnerbannerComponent } from './cyberinnerbanner/cyberinnerbanner.component';
import { CyberKeypartnersComponent } from './cyber-keypartners/cyber-keypartners.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CybersecuritylandingComponent,
    CybersecurityhomeComponent,
    ProblemStatementsComponent,
    ProblemStatementsDetailsComponent,
    CyberUpcomingeventsComponent,
    CyberProblemStatementstwoComponent,
    CyberEsteemedCommetteeMembersComponent,
    CyberEcosystemPartnersComponent,
    CyberhometwoComponent,
    CyberinnerbannerComponent,
    CyberKeypartnersComponent,
  ],
  imports: [
    CommonModule,
    CybersecurityRoutingModule,
    WebsiteModule,
    RouterModule,
    CarouselModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class CybersecurityModule { }
