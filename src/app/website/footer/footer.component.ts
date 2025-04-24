import { HostListener, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ApiService } from '../../COMMON/api.service';
declare var $: any;
import Swal from 'sweetalert2'
import { NgxSpinnerService } from "ngx-spinner";
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
  statesArray: any = [];
  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService, private apiSer: ApiService, private spinner: NgxSpinnerService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.RegForm = this.formBuilder.group({
      eventType: [''],
      participant_name: ['', [Validators.required,  Validators.pattern(/^[0-9a-zA-Z\s]*$/)]],
      // participant_name: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phoneNum: ['', [Validators.required, Validators.minLength(10), Validators.pattern("^[0-9]*$")]],
      participateType: ['', Validators.required]
    });
    // $('#summerOtherNote').summernote();
  }
  get govformcontrols() {
    return this.RegForm.controls;
  }


  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    let reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      this.base64String = reader.result
    }

  }

  downloadBrochure(){
    let el = document.getElementById('downloadElement')!;
    el.click(); 
  }
  onSubmit() {
    this.submitted = true;
    if (this.RegForm.invalid) {
      return;
    }
    else {
      var obj = {
        "event_type_id": 1,
        "participant_name": this.RegForm.value.participant_name,
        "email": this.RegForm.value.emailId,
        "phone": this.RegForm.value.phoneNum,
        "participant_type": this.RegForm.value.participateType
      }
      this.apiSer.submitDownloadBrochure(obj).subscribe((data: any) => {
        this.spinner.show()
        if (data.code == 200) {
          this.spinner.hide()
          // Swal.fire('Success', 'Saved Successfully', 'success')
          this.RegForm.reset();
          this.submitted = false;
          let el = document.getElementById('downloadElement')!;
          el.click();
          let closeButton = document.getElementById('closeBtn')!;
          closeButton.click();
      this.toastr.success('Brouchure downloaded successfully')

        }})
      //   else {
      //     Swal.fire('Error', 'Error while saving the data', 'error')
      //   }
      // })
    }
    
  }

  numberOnly(event:any): boolean {
    // this.utils.pinCodeCheck(this.model.pincode);
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  fileUpload(event: any) {
    if (event.target.files.length > 0) {
      this.fileUpdatedinEditCase = true
      let reader = new FileReader();
      const file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    this.iFrameDisplay = false;
      this.fileUploadDoc = file
    }
  }

  participateTypeEvent(event: any){
    var value = event.target.value;
    this.studentFieldsShow = false;
    this.researcherFieldsShow = false;
    if(value == 'Student'){
      this.studentFieldsShow = true;
    }
    else{
      this.researcherFieldsShow = true;
    }
  }


  

  backClick(){
    this.tableShow = true
    this.RegForm.reset()
    this.imageUrl = ''
    this.editCase = false;
    this.fileUpdatedinEditCase = false;
    this.submitted = false;
  }

  

}
