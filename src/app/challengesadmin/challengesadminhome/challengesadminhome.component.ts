import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from 'src/app/excel.service';
import { ChallengeService } from 'src/app/website/challenge.service';

@Component({
  selector: 'app-challengesadminhome',
  templateUrl: './challengesadminhome.component.html',
  styleUrls: ['./challengesadminhome.component.css']
})
export class ChallengesadminhomeComponent implements OnInit {
  challengeDataArray: any = [];
  challengeId: any = 1;
  viewData: any = {};
  authorisation_letter: any = '';
  pitch_deck: any = '';
  filterTerm: any = '';
  searchTerm = '';
  searchtext: any = '';
  // filterTerm: any = '';
  // searchTerm: any = '';

  itemsPerPage: number = 50;
  currentPage!: number;
  p: number = 1;

  constructor(
    private router: Router,
    private toaster:ToastrService,
    private spinner: NgxSpinnerService,
    private challengeService:ChallengeService, private excelService:ExcelService) {      
    }
  ngOnInit(): void {
    this.getAllApplications();
  }

  getAllApplications(){
    this.viewData = {};
    this.challengeDataArray = [];
    this.challengeService.getAllApplicationsforAdmin(this.challengeId).subscribe((data: any) => {
      if(data['status'] === 'Success'){
        this.toaster.success('Data fetched successfully')
        this.challengeDataArray = data['data']
      }
    })
  }

  modalData(item: any, index: any){
    this.viewData = {};
    this.viewData = item;
    this.getUserDocuments(item['email_id']);
  }

  getUserDocuments(email:any){
    this.authorisation_letter = '';
    this.pitch_deck = '';
    this.challengeService.getUserDocuments(email, this.challengeId).subscribe((data: any) => {
      if(data['status'] === 'Success'){
        this.authorisation_letter = data['data'][0]['authorisation_letter']
        this.pitch_deck = data['data'][0]['pitch_deck']
      }
    })
  }

  downloadExcel()
  {
    var d: any = []
   let tempData = this.challengeDataArray.map((e: any) => {
    d["Application Id"] = e.application_id
    d["Full Name"] = e.name_of_startupfounder_or_co_founder
    d['Challenge Name'] = e.challenge_name
    d["Mobile No"] = e.mobile_number
    d["Email Id"] = e.email_id
    d["Alternate Email Id"] = e.alternate_emailid == '' ? "NA": e.alternate_emailid
      d["Startup Registered State"] = e.state_name
      d["City/Town"] = e.city_or_town
      d["Website URL"] = e.website_url == '' ? "NA": e.website_url
      d["Founder/Startup LinkedIn Profile"] = e.linkedin_profile == '' ? "NA": e.linkedin_profile
      d["Problem Statement"] = e.problem_name 
      d["Designation"] = e.designation 
      d["Startup Name"] = e.startup_name
      d["Current stage of Startup"] = e.current_stage_name
      d["Type of Entity"] = e.entity_name
      d["Year of Corporation"] = e.year_of_incorporation
      d["DPIIT Certificate (Startup India Recognition)"] = e.dpiit_certificate,
      d["DPIIT Number"] = e.dpiit_number == '' ? "NA": e.dpiit_number,
      d["Solution"] = e.solution_for_problem
      d["Value Proposition"] = e.value_proposition
      d["Submitted on"] = this.formateDate(e.inserted_on)  
      // d['Form Id'] = e.form_id
      // d['Challenge Id'] = e.challenge_id
      // d['Entity Id'] = e.entity_id
      // d['Registered State Id'] = e.startup_registered_state_id
      // d['Current Stage Id'] = e.current_stage_id
      // d['Problem Id'] = e.problem_id
      const {
        application_id,name_of_startupfounder_or_co_founder,challenge_name,mobile_number,
        email_id,alternate_emailid, state_name, city_or_town, website_url,
        linkedin_profile, problem_name, designation,
        startup_name, entity_name, year_of_incorporation, dpiit_certificate,
        dpiit_number, solution_for_problem, value_proposition, inserted_on,
        ...updatedObject } = d;
        // const {
        //   application_id,name_of_startupfounder_or_co_founder,challenge_name,mobile_number,
        //   email_id,alternate_emailid, state_name, city_or_town, website_url,
        //   linkedin_profile, problem_name, designation,
        //   startup_name, entity_name, year_of_incorporation, dpiit_certificate,
        //   dpiit_number, solution_for_problem, value_proposition, inserted_on,
        //   ...updatedObject } = e;
  
       return updatedObject;
    })
  this.excelService.exportAsExcelFile(tempData, `Report`);
  }

  formateDate(event: any){
    var date = new Date(event)
    // return date.toLocaleString("en-IN", {timeZone: "Asia/Kolkata"})
    return date.toLocaleString('en-GB', { hour12: true })
  }
  onPageChange(e: any) {
    if (e) {
      this.p = e;
    }
  }
}
