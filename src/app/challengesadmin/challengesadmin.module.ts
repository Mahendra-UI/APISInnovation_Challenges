import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengesadminRoutingModule } from './challengesadmin-routing.module';
import { ChallengesadminlandingComponent } from './challengesadminlanding/challengesadminlanding.component';
import { ChallengesadminhomeComponent } from './challengesadminhome/challengesadminhome.component';
import { ChallengesadminheaderComponent } from './challengesadminheader/challengesadminheader.component';
import { ChallengesadminfooterComponent } from './challengesadminfooter/challengesadminfooter.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ChallengesadminleftpanelComponent } from './challengesadminleftpanel/challengesadminleftpanel.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    ChallengesadminlandingComponent,
    ChallengesadminhomeComponent,
    ChallengesadminheaderComponent,
    ChallengesadminfooterComponent,
    ChallengesadminleftpanelComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    ChallengesadminRoutingModule,
    RouterModule,
    ToastrModule,
    FormsModule,
    NgxPaginationModule,
    // Ng2SearchPipeModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ChallengesadminModule { }
