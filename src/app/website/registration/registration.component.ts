import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ApiService } from '../../COMMON/api.service';
declare var $: any;
import Swal from 'sweetalert2'
import { NgxSpinnerService } from "ngx-spinner";
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  RegForm: any = FormGroup;
  submitted = false;
  fileToUpload: any;
  imageUrl: any;
  fileUploadDoc: any;
  base64String: any;
  listAnnoucements: any = [];
  tableShow: boolean = true;
  formShow: boolean = false;
  editCase: boolean = false;
  ministerId: any;
  fileUpdatedinEditCase: boolean = false;
  iFrameDisplay: boolean = false;
  downloadUrl: any;
  annoucementsList: any = [];
  studentFieldsShow: boolean = false;
  researcherFieldsShow: boolean = false;
  ideationTypeSection: boolean = false;
  deploymentTypeSection: boolean = false;
  startupSection: boolean = false;
  nameOfOrg: any = 'Organization';
  deploymentExtraSection: boolean = false;
  attachmentName: any = '';
  fileExtension: any = '';
  statesArray: any = [];
  @Input() statementId: any;


  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
     private apiSer: ApiService, private spinner: NgxSpinnerService,
      private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.RegForm = this.formBuilder.group({
      applicantName: ['', Validators.required],
      participateType: ['', Validators.required],
      ideationType: [''],
      deploymentType: [''],
      startupType: [''],
      nameOfOrganization: ['', Validators.required],
      location: ['', Validators.required],
      state: ['', Validators.required],
      typeResearch: [''],
      education: [''],
      year: [''],
      emailId: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phoneNum: ['', [Validators.required, Validators.minLength(10), Validators.pattern("^[0-9]*$")]],
      address: ['', Validators.required],
      aadharNumber: ['', [Validators.required, Validators.pattern(/^-?([1-9]\d*)?$/)]],
      problemStatement: ['', Validators.required],
      document: ['', Validators.required],
      yearEstablished: ['', [Validators.minLength(4), Validators.pattern("^[0-9]*$")]],
      gstRegistrated: [false]
    });
    this.getState();

    // $('#summerOtherNote').summernote();
  }
  get govformcontrols() {
    return this.RegForm.controls;
  }

  

  getState(){
    this.apiSer.getStates().subscribe((data:any) => {
      this.statesArray = JSON.parse(data['data']);
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.RegForm.invalid) {
      return;
    }
    else {
      if (!this.apiSer.validateVerhoeff(this.RegForm.value.aadharNumber)) {
        this.toastr.error('Enter valid aadhar number')
        return;
      }
      var imageBase64 = this.imageUrl
      var formData = new FormData()
      formData.append('event_type_id', '1')
      formData.append('attachement_name', this.attachmentName)
      formData.append('file_extension', this.fileExtension)
      formData.append('participant_type_id', '1')
      formData.append('participant_name', this.RegForm.value.applicantName)
      formData.append('org_name', this.RegForm.value.nameOfOrganization)
      formData.append('location', this.RegForm.value.location)
      formData.append('state_name', this.RegForm.value.state)
      formData.append('education', this.RegForm.value.education)
      if(this.deploymentExtraSection){
        formData.append('year_edu_est', this.RegForm.value.yearEstablished)
        // formData.append('year_edu_est', '2002')

      }
      else{
        formData.append('year_edu_est', this.RegForm.value.year)
        // formData.append('year_edu_est', '2020')

      }
      formData.append('research_type', this.RegForm.value.typeResearch)
      formData.append('isgstap', this.RegForm.value.gstRegistrated)
      formData.append('email', this.RegForm.value.emailId)
      formData.append('phone_country_code', '91')
      formData.append('phone', this.RegForm.value.phoneNum)
      formData.append('Address', this.RegForm.value.address)
      formData.append('Aadhaar', this.RegForm.value.aadharNumber)
      formData.append('problem_statements_id', this.RegForm.value.problemStatement)
      formData.append('file_content', imageBase64);
      this.apiSer.submitRegistation(formData).subscribe((data: any) => {
        this.spinner.show()
        if (data.code == 200) {
          this.spinner.hide()
          // Swal.fire('Success', 'Saved Successfully', 'success')
      this.toastr.success('Your response has been successfully submitted. We will get back to you shortly')

      // this.RegForm.get('problem_statements_id').setValue('');
      // this.RegForm.get('state_name').setValue('');
          this.RegForm.reset();
          this.submitted = false;
          this.imageUrl = '';
          this.attachmentName = '';
          this.fileExtension = '';
          this.ideationTypeSection = false;
          this.deploymentTypeSection = false;
          this.startupSection = false;
        }
        else {
      this.toastr.error('Error while submitting the data')

        }
      })
    }
    
  }

  fileUpload(event: any) {
    if (event.target.files.length > 0) {
      
      let reader = new FileReader();
      const file = event.target.files[0];
      this.fileExtension = '';
      this.attachmentName = '';
      this.imageUrl = '';
    reader.readAsDataURL(file);
    this.attachmentName = event.target.files[0].name
    if (event.target.files[0].size / 1024 / 1024 > 10) {
      this.toastr.error('File max size should be up to 10MB');
      event.target.value = ''
      return;
    }
    if(event.target.files[0].type == "application/pdf"){
      this.fileExtension = '.pdf'
    }
    else{
      this.fileExtension = '.pptx'
    }
    this.imageUrl = event.target.files[0];
    reader.onload = (event: any) => {
    }
    }
  }


  participateTypeEvent(event: any){
    var value = event.target.value;
    this.ideationTypeSection = false;
    this.deploymentTypeSection = false;
    this.studentFieldsShow = false;
    this.researcherFieldsShow = false;
    this.startupSection = false;
    this.deploymentExtraSection = false;
    this.govformcontrols['ideationType'].clearValidators();
    this.govformcontrols['ideationType'].updateValueAndValidity();
    this.govformcontrols['deploymentType'].clearValidators();
    this.govformcontrols['deploymentType'].updateValueAndValidity();


    this.govformcontrols['education'].clearValidators();
    this.govformcontrols['education'].updateValueAndValidity();
    this.govformcontrols['year'].clearValidators();
    this.govformcontrols['year'].updateValueAndValidity();      
    this.govformcontrols['typeResearch'].clearValidators();
    this.govformcontrols['typeResearch'].updateValueAndValidity();

    this.govformcontrols['startupType'].clearValidators();
    this.govformcontrols['startupType'].updateValueAndValidity();
    this.govformcontrols['yearEstablished'].clearValidators();
      this.govformcontrols['yearEstablished'].updateValueAndValidity();
      this.govformcontrols['gstRegistrated'].clearValidators();
      this.govformcontrols['gstRegistrated'].updateValueAndValidity();


    this.RegForm.get('gstRegistrated').setValue(false);
    this.RegForm.get('ideationType').setValue('')
    this.RegForm.get('deploymentType').setValue('')
    this.RegForm.get('startupType').setValue('')
    if(value == 'Ideation'){
      this.ideationTypeSection = true;
      this.govformcontrols['ideationType'].setValidators([Validators.required])
      this.govformcontrols['ideationType'].updateValueAndValidity();
    }
    else{
      this.deploymentTypeSection = true;
      this.nameOfOrg = 'Company/Organization';
      this.govformcontrols['deploymentType'].setValidators([Validators.required])
      this.govformcontrols['deploymentType'].updateValueAndValidity();
    }
  }

  ideationTypeCheck(event: any){
    var value = event.target.value;
    this.studentFieldsShow = false;
    this.researcherFieldsShow = false;
    this.govformcontrols['education'].clearValidators();
    this.govformcontrols['education'].updateValueAndValidity();
    this.govformcontrols['year'].clearValidators();
    this.govformcontrols['year'].updateValueAndValidity();      
    this.govformcontrols['typeResearch'].clearValidators();
    this.govformcontrols['typeResearch'].updateValueAndValidity();

    if(value == '2'){
      this.studentFieldsShow = true;
      this.nameOfOrg = 'College'
        this.govformcontrols['education'].setValidators([Validators.required])
        this.govformcontrols['education'].updateValueAndValidity();
        this.govformcontrols['year'].setValidators([Validators.required])
        this.govformcontrols['year'].updateValueAndValidity();      
    }
    else if(value == '3'){
      this.nameOfOrg = 'College'
    }
    else if(value == '1'){
      this.researcherFieldsShow = true;
      this.nameOfOrg = 'Organization';
      this.govformcontrols['typeResearch'].setValidators([Validators.required])
      this.govformcontrols['typeResearch'].updateValueAndValidity();
    }
  }

  deploymentTypeCheck(event: any){
    var value = event.target.value;
    this.startupSection = false;
    this.deploymentExtraSection = false;
    this.govformcontrols['startupType'].clearValidators();
    this.govformcontrols['startupType'].updateValueAndValidity();
    this.govformcontrols['yearEstablished'].clearValidators();
      this.govformcontrols['yearEstablished'].updateValueAndValidity();
      this.govformcontrols['gstRegistrated'].clearValidators();
      this.govformcontrols['gstRegistrated'].updateValueAndValidity();
    if(value == '5'){
      this.startupSection = true;
      this.deploymentExtraSection = true;
      this.govformcontrols['startupType'].setValidators([Validators.required])
      this.govformcontrols['startupType'].updateValueAndValidity();
      this.govformcontrols['yearEstablished'].setValidators([Validators.required])
      this.govformcontrols['yearEstablished'].updateValueAndValidity();
      this.govformcontrols['gstRegistrated'].setValidators([Validators.required])
      this.govformcontrols['gstRegistrated'].updateValueAndValidity();

    }
    else if(value == '8'){
      this.deploymentExtraSection = false;
    }
    else{
      this.deploymentExtraSection = true;
      this.govformcontrols['yearEstablished'].setValidators([Validators.required])
      this.govformcontrols['yearEstablished'].updateValueAndValidity();
      this.govformcontrols['gstRegistrated'].setValidators([Validators.required])
      this.govformcontrols['gstRegistrated'].updateValueAndValidity();
    }
  }

  statupTypeCheck(event: any){
    // startupType

  }

  validateAadhar(event: any) {
    var aadhar = event.target.value
    if (!this.apiSer.validateVerhoeff(aadhar)) {
      this.toastr.error('Enter valid aadhar number')
    }
  }

  gstRegistratedCheck(event: any){

  }

  numberOnly(event:any): boolean {
    // this.utils.pinCodeCheck(this.model.pincode);
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
