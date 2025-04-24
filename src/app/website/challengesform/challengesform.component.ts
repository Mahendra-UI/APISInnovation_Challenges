import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { utilsService } from 'src/app/utils.service';
import { ChallengeService } from 'src/app/website/challenge.service';

@Component({
  selector: 'app-challengesform',
  templateUrl: './challengesform.component.html',
  styleUrls: ['./challengesform.component.css']
})
export class ChallengesformComponent  implements OnInit {
  challengesForm: FormGroup;
  submitted: boolean = false;
  statesList:any = [];
  challengesList:any = [];
  problemStatementesList:any = [];
  stagesList:any = [];
  entityList:any = [];
  captchaData:any;
  imageBase64: any;
  emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$';
  challengeId: number = 1;
  editMode: boolean =  false;
  boardAuthorizationLetterBase64: any = '';
  pitchDeckUploadBase64: any = '';
  constructor(private router: Router,
    private fb: FormBuilder,
    private toaster:ToastrService,
    private spinner: NgxSpinnerService,
    private challengeService:ChallengeService,
    private utils: utilsService){

      this.loadcaptcha();
      this.challengesForm = this.fb.group({
      // challengeName: new FormControl('', [Validators.required]),
      fullName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
      mobileNo: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      emailId: new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
      alternameEmailId: new FormControl('',[Validators.pattern(this.emailPattern)]),
      designation: new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]),
      startupName: new FormControl('', [Validators.required]),
      typeOfEntity: new FormControl('', [Validators.required]),
      yearOfCorporation: new FormControl('', [Validators.required,Validators.minLength(4),Validators.maxLength(4)]),
      registeredState: new FormControl('', [Validators.required]),
      cityTown: new FormControl('', [Validators.required]),
      websiteUrl: new FormControl(''),
      linkedInProfile: new FormControl(''),
      dpitCertificate: new FormControl('', [Validators.required]),
      dpitNumber: new FormControl(''),
      currentStageOfStartup: new FormControl('', [Validators.required]),
      problemStamentName: new FormControl('', [Validators.required]),
      innovativeIdea: new FormControl('', [Validators.required]),
      propositionValue: new FormControl('', [Validators.required]),
      boardAuthorizationLetter: new FormControl('', [Validators.required]),
      pitchDeckUpload: new FormControl('', [Validators.required]),
      acceptCheck: new FormControl('', [Validators.required]),
      captchacode: ['', [Validators.required]]
      })
    }

  ngOnInit(): void {
    this.getStatesList();
    this.getChallengesList();
    this.getProblemStatements();
    this.getCurrentStages();
    this.getEntity();
  }
  
  get challengesFormCtrls() {
    return this.challengesForm.controls;
  }
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  handleBoardLetter(event: any) {
    if (this.fileSizeValidate(event?.target?.files[0])) {
      if (this.fileTypeCheckBoardLetter(event.target.files[0])) {
        let reader = new FileReader();
        reader.readAsDataURL(event?.target?.files[0]);
        reader.onload = (e) => {
          this.challengesForm.patchValue({
            boardAuthorizationLetter : reader.result
          });
          this.boardAuthorizationLetterBase64 = reader.result;
         }
      } else {
        event.target.value = '';
      }
    } else {
      event.target.value = '';
    }
  }

fileTypeCheckBoardLetter(event: any) {
    const validFileTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'application/pdf',
    ];
    
    var fileName = event.name;
    
    var matched = [];
    let matches = fileName.match(/\./g);
    let isValid = matches != null && matches.length > 1 ? false : true;
    if(isValid === false){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please upload a valid file/Check for filename',
      });
      return false;
    }
    else{
      if(fileName.includes('%')){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Please upload a valid file/Check for filename',
        });
        return false;
      }
    for (var i = 0; i <= validFileTypes.length; i++) {
      if (validFileTypes[i] == event.type) {
        matched.push(validFileTypes[i]);
      }
    }
    if (matched.length > 0) {
      return true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please upload a valid file/Check for filename',
      });
      return false;
    }
  }
}

handlePitechDeckLetter(event: any) {
  if (this.fileSizeValidate(event?.target?.files[0])) {
    if (this.fileTypeCheckPitchDeck(event.target.files[0])) {
      let reader = new FileReader();
      reader.readAsDataURL(event?.target?.files[0]);
      reader.onload = (e) => {
        this.challengesForm.patchValue({
          pitchDeckUpload : reader.result,
        });
        this.pitchDeckUploadBase64 = reader.result;
       }
    } else {
      event.target.value = '';
    }
  } else {
    event.target.value = '';
  }
}

fileTypeCheckPitchDeck(event: any) {
    const validFileTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'application/pdf',
    ];
    
    var fileName = event.name;
    
    var matched = [];
    let matches = fileName.match(/\./g);
    let isValid = matches != null && matches.length > 1 ? false : true;
    if(isValid === false){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please upload a valid file/Check for filename',
      });
      return false;
    }
    else{
      if(fileName.includes('%')){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Please upload a valid file/Check for filename',
        });
        return false;
      }
    for (var i = 0; i <= validFileTypes.length; i++) {
      if (validFileTypes[i] == event.type) {
        matched.push(validFileTypes[i]);
      }
    }
    if (matched.length > 0) {
      return true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please upload a valid file/Check for filename',
      });
      return false;
    }
  }
  }


  fileSizeValidate(event: any) {
    var file = 0;
    var fsize;
    fsize = event.size;
    file = Math.round(fsize / 1024);
    if (file > 2048) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'File too Big, please select a file less than 2mb',
      });
      return false;
    } else {
      return true;
    }
  }

  onSubmitChallengeForm() {
    this.submitted = true;
    console.warn('this.challengesForm', this.challengesForm)
    if (this.challengesForm.invalid) {
      return;
    }
    // if(this.checkYear() === true){
    //   return;
    // }
    // if(this.checkdpitCertificate() === true){
    //   return;
    // }
    let challengesFormDataObj = {
      // "p_challenge_id": this.challengesForm.value?.challengeName,
      "p_challenge_id": this.challengeId,
      "name_of_startupfounder_or_co_founder": this.challengesForm.value?.fullName,
      "startup_name": this.challengesForm.value?.startupName,
      "mobile_number": this.challengesForm.value?.mobileNo,
      "email_id": this.challengesForm.value?.emailId,
      "alternate_emailid": this.challengesForm.value?.alternameEmailId,
      "designation": this.challengesForm.value?.designation,
      "entity_id": this.challengesForm.value?.typeOfEntity,
      "year_of_incorporation": this.challengesForm.value?.yearOfCorporation,
      "startup_registered_state_id": this.challengesForm.value?.registeredState,
      "city_or_town": this.challengesForm.value?.cityTown,
      "website_url": this.challengesForm.value?.websiteUrl,
      "linkedin_profile": this.challengesForm.value?.linkedInProfile,
      "dpiit_certificate": this.challengesForm.value.dpitCertificate == 'Yes'?1:2,
      "dpiit_number": this.challengesForm.value?.dpitNumber,
      "current_stage_id": this.challengesForm.value?.currentStageOfStartup,
      "problem_id": this.challengesForm.value?.problemStamentName,
      "solution_for_problem": this.challengesForm.value?.innovativeIdea,
      "value_proposition": this.challengesForm.value?.propositionValue,
      "authorisation_letter": this.boardAuthorizationLetterBase64,
      "pitch_deck": this.pitchDeckUploadBase64,
      "capchaId": this.captchaData?.Capchid,
      "captchaCode": this.challengesForm.value.captchacode,
      // "authorisation_letter_file": this.challengesForm.value?.boardAuthorizationLetter,
      // "pitch_deck_file": this.challengesForm.value?.pitchDeckUpload,
    }
    this.spinner.show();
    var ptype = 1;
    if(this.editMode == true){
      ptype = 2;
    }
    this.challengeService.saveChallengesForm(ptype, this.challengeId, challengesFormDataObj).subscribe((res:any) => {
      this.spinner.hide();
      if(res?.message == 'Invalid Captcha')
      this.toaster.error('Invalid capacha','Fail');
      else if(res?.message == 'Success')
      {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Registered successfully'
        }).then(() => {
          this.router.navigate(['/challengesform'])
          this.editMode = false;
          this.challengesForm.reset();  
          this.submitted = false;
        })
      // this.toastr.success('Registerd successfully',"Success")
      // this.submitted = false;
      }
      else
      {
        this.toaster.error(res['data'][0]['status'],"Failed")
      this.loadcaptcha();
      }
    },
    (error)=> {
      this.spinner.hide();
      this.toaster.error('Failed, Please try again....','Failed')
      this.loadcaptcha();
    }
    
    )
  }

  getStatesList()
  {
    this.spinner.show()
      this.challengeService.getAllList(5).subscribe((res: any) => {
      this.spinner.hide();
      if(res['data'])
        this.statesList = res['data'];
      },
      (error)=> {
        this.spinner.hide();
      })
  }

  getChallengesList()
  {
    this.spinner.show()
      this.challengeService.getAllList(1).subscribe((res: any) => {
      this.spinner.hide();
      if(res['data'])
        this.challengesList = res['data'];
      },
      (error)=> {
        this.spinner.hide();
      })
  }

  getCurrentStages()
  {
    this.spinner.show()
      this.challengeService.getAllList(2).subscribe((res: any) => {
      this.spinner.hide();
      if(res['data'])
        this.stagesList = res['data'];
      },
      (error)=> {
        this.spinner.hide();
      })
  }
  getEntity()
  {
    this.spinner.show()
      this.challengeService.getAllList(3).subscribe((res: any) => {
      this.spinner.hide();
      if(res['data'])
        this.entityList = res['data'];
      },
      (error)=> {
        this.spinner.hide();
      })
  }


  getProblemStatements() {
    this.spinner.show()
    this.challengeService.getAllProblemStatementsList(1, this.challengeId).subscribe((res: any) => {
    this.spinner.hide();
    if(res['data'])
      this.problemStatementesList = res['data'];
    },
    (error)=> {
      this.spinner.hide();
    })
  }
  loadcaptcha() {
    this.spinner.show();
        this.challengeService.getcaptcha().subscribe((res: any) => {
          this.captchaData = res;
      this.imageBase64 = res.imgurl;
      this.spinner.hide();
      sessionStorage.setItem("Capchid", this.utils.encrypt(res.Capchid));
    }, error => {
      this.spinner.hide();
    })
  }

  checkEmail(event: any){
    var email = event.target.value;
    this.spinner.show();
    this.challengeService.checkEmailForChallenge(email, this.challengeId).subscribe((data: any) => {
      this.spinner.hide();
      if(data['data'] === 1){
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Error',
        //   text: 'You have already submitted the response earlier. If you want to edit the response, click on the edit button below to edit the data.'
        // }).then(() => {
        //   this.router.navigate(['/challengesform'])
        // })

        Swal.fire({
          title: 'Information',
          icon: 'question',
          text: 'You have already submitted the response earlier. If you want to edit the response, click on the edit button below to edit the data.',
          showCancelButton: true,
          confirmButtonText: 'Yes, Edit',
          cancelButtonText: 'No, Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            // Handle the "Yes" button click
            this.editUserData(email);
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Handle the "No" button click
            this.challengesForm.reset();
          }
        });

        // this.toaster.info('You have already submitted the response earlier. If you want to edit the response, click on the button below to edit the data.')
      }
    })
  }

  editUserData(email: any){
    this.challengeService.getUserDataByEmail(email, this.challengeId).subscribe((data: any) => {
      if(data['status'] === 'Success'){
        this.editMode = true;
        var formData = data['data'][0];
        this.challengesForm.patchValue({
          fullName: formData['name_of_startupfounder_or_co_founder'],
          startupName: formData['startup_name'],
          mobileNo: formData['mobile_number'],
          emailId: formData['email_id'],
          alternameEmailId: formData['alternate_emailid'],
          designation: formData['designation'],
          typeOfEntity: formData['entity_id'],
          yearOfCorporation: formData['year_of_incorporation'],
          registeredState: formData['startup_registered_state_id'],
          cityTown: formData['city_or_town'],
          websiteUrl: formData['website_url'],
          linkedInProfile: formData['linkedin_profile'],
          dpitCertificate: formData['dpiit_certificate'],
          dpitNumber: formData['dpiit_number'],
          currentStageOfStartup: formData['current_stage_id'],
          problemStamentName: formData['problem_id'],
          innovativeIdea: formData['solution_for_problem'],
          propositionValue: formData['value_proposition'],
          // boardAuthorizationLetter: formData['authorisation_letter'],
          // pitchDeckUpload: formData['pitch_deck'],
          capchaId: this.captchaData?.Capchid
        });
        this.boardAuthorizationLetterBase64 = formData['authorisation_letter']
        this.pitchDeckUploadBase64 = formData['pitch_deck'];
        this.challengesForm.get('boardAuthorizationLetter')?.setValidators([]);
        this.challengesForm.get('boardAuthorizationLetter')?.setErrors(null);
        this.challengesForm.get('boardAuthorizationLetter')?.updateValueAndValidity();
        this?.challengesForm?.get('pitchDeckUpload')?.setValidators([]); // or clearValidators()
        this.challengesForm.get('pitchDeckUpload')?.setErrors(null);
        this?.challengesForm?.get('pitchDeckUpload')?.updateValueAndValidity();
      }
    })
  }

  onChangeDpiitDetails(event: any){

  }

  checkYear(){
    var enteredYear = this.challengesForm.value?.yearOfCorporation;
    const d = new Date();
    let year = d.getFullYear();
    enteredYear = parseInt(enteredYear);
    if(enteredYear > year){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Year of Corporation should be less than or equal to current year',
      });
      this.challengesForm.patchValue({
        yearOfCorporation : ''
      });
      return true;
    }
    else{
      return false;
    }
  }

  checkdpitCertificate(){
    var value = this.challengesForm.value?.dpitCertificate;
    if(value == 'Yes'){
      this.challengesForm.get('dpitNumber')?.setValidators([Validators.required])
      this.challengesForm.get('dpitNumber')?.setErrors({'required': true})
      this.challengesForm.get('dpitNumber')?.updateValueAndValidity();
      return true;
    }
    else{
      this.challengesForm.get('dpitNumber')?.setValidators([])
      this.challengesForm.get('dpitNumber')?.setErrors(null)
      this.challengesForm.get('dpitNumber')?.updateValueAndValidity();
      return false;
    }
  }
}
