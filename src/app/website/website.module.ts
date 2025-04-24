import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsitelandingComponent } from './websitelanding/websitelanding.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { WebsiteRoutingModule } from './website-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WinnertwoComponent } from './winnertwo/winnertwo.component';
import { WinneroneComponent } from './winnerone/winnerone.component';
import { AboutoneComponent } from './aboutone/aboutone.component';
import { RolesoneComponent } from './rolesone/rolesone.component';
import { RolestwoComponent } from './rolestwo/rolestwo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientsoneComponent } from './clientsone/clientsone.component';
import { BanneroneComponent } from './bannerone/bannerone.component';
import { DetailsoneComponent } from './detailsone/detailsone.component';
import { OrganizedoneComponent } from './organizedone/organizedone.component';
import { ProblemstatementsoneComponent } from './problemstatementsone/problemstatementsone.component';
import { ParticipateoneComponent } from './participateone/participateone.component';
import { EvalutionprocessoneComponent } from './evalutionprocessone/evalutionprocessone.component';
import { FaqoneComponent } from './faqone/faqone.component';
import { DownloadComponent } from './download/download.component';
import { StatementonedetailsComponent } from './statementonedetails/statementonedetails.component';
import { CommonbannerComponent } from './commonbanner/commonbanner.component';
import { BannertwoComponent } from './bannertwo/bannertwo.component';
import { TimelineprocessComponent } from './timelineprocess/timelineprocess.component';
import { WinnerthreeComponent } from './winnerthree/winnerthree.component';
import { TimelineprocesstwoComponent } from './timelineprocesstwo/timelineprocesstwo.component';
import { EventsComponent } from './events/events.component';
import { HeadertwoComponent } from './headertwo/headertwo.component';
import { BackgroundComponent } from './background/background.component';
import { AboutfintechchallengeComponent } from './aboutfintechchallenge/aboutfintechchallenge.component';
import { UpcomingeventsComponent } from './upcomingevents/upcomingevents.component';
import { KeypartnersComponent } from './keypartners/keypartners.component';
import { CountdownModule } from 'ngx-countdown';
import { CountDownComponent } from './countdown/countdown.component';
import { OrganizersComponent } from './organizers/organizers.component';
import { CommonsectionComponent } from './commonsection/commonsection.component';
import { UpcomingeventstwoComponent } from './upcomingeventstwo/upcomingeventstwo.component';
import { StrategicpartnersComponent } from './strategicpartners/strategicpartners.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { InvestinapComponent } from './investinap/investinap.component';
import { GeneralprocessComponent } from './generalprocess/generalprocess.component';
import { EcopartnersComponent } from './ecopartners/ecopartners.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { DatasecuritychallengeComponent } from './datasecuritychallenge/datasecuritychallenge.component';
import { LoginComponent } from './login/login.component';
import { ChallengesformComponent } from './challengesform/challengesform.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CivilsupplieshackathonComponent } from './civilsupplieshackathon/civilsupplieshackathon.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CivilsuppliesqueriesComponent } from './civilsuppliesqueries/civilsuppliesqueries.component';



@NgModule({
  declarations: [
    WebsitelandingComponent,
    HomeComponent,
    RegistrationComponent,
    WinnertwoComponent,
    WinneroneComponent,
    AboutoneComponent,
    RolesoneComponent,
    RolestwoComponent,
    HeaderComponent,
    FooterComponent,
    ClientsoneComponent,
    BanneroneComponent,
    DetailsoneComponent,
    OrganizedoneComponent,
    ProblemstatementsoneComponent,
    ParticipateoneComponent,
    EvalutionprocessoneComponent,
    FaqoneComponent,
    DownloadComponent,
    StatementonedetailsComponent,
    CommonbannerComponent,
    BannertwoComponent,
    TimelineprocessComponent,
    WinnerthreeComponent,
    TimelineprocesstwoComponent,
    EventsComponent,
    HeadertwoComponent,
    BackgroundComponent,
    AboutfintechchallengeComponent,
    UpcomingeventsComponent,
    KeypartnersComponent,
    CountDownComponent,
    OrganizersComponent,
    CommonsectionComponent,
    UpcomingeventstwoComponent,
    StrategicpartnersComponent,
    SponsorComponent,
    InvestinapComponent,
    GeneralprocessComponent,
    EcopartnersComponent,
    NewcomponentComponent,
    DatasecuritychallengeComponent,
    LoginComponent,
    ChallengesformComponent,
    CivilsupplieshackathonComponent,
    CivilsuppliesqueriesComponent
],

  imports: [
    CommonModule, RouterModule, WebsiteRoutingModule, FormsModule, ReactiveFormsModule,
    // Ng2SearchPipeModule,
    CarouselModule, SlickCarouselModule, CountdownModule, NgxSpinnerModule, NgMultiSelectDropDownModule.forRoot()
  ],
  exports:[
    HeadertwoComponent,
    FooterComponent,
    CountDownComponent,
    FaqoneComponent
  ]
})
export class WebsiteModule { }
