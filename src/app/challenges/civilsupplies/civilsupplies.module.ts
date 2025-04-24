import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CivilsuppliesRoutingModule } from './civilsupplies-routing.module';
import { CivilsupplieshackathonhomeComponent } from './civilsupplieshackathonhome/civilsupplieshackathonhome.component';
import { CivilsupplieslandingComponent } from './civilsupplieslanding/civilsupplieslanding.component';
import { WebsiteModule } from 'src/app/website/website.module';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CivilsuppliesproblemstatementsComponent } from './civilsuppliesproblemstatements/civilsuppliesproblemstatements.component';
import { CivilsuppliesdetailedproblemstatementsComponent } from './civilsuppliesdetailedproblemstatements/civilsuppliesdetailedproblemstatements.component';
import { CivilsuppliesbannerComponent } from './civilsuppliesbanner/civilsuppliesbanner.component';


@NgModule({
  declarations: [
    CivilsupplieshackathonhomeComponent,
    CivilsupplieslandingComponent,
    CivilsuppliesproblemstatementsComponent,
    CivilsuppliesdetailedproblemstatementsComponent,
    CivilsuppliesbannerComponent,
  ],
  imports: [
        CommonModule,
        CivilsuppliesRoutingModule,
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
export class CivilsuppliesModule { }
