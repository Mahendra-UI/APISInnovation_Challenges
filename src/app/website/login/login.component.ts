import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../challenge.service';
import { utilsService } from 'src/app/utils.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  captchaData:any;
  imageBase64: any;
  loginForm: FormGroup;
  submitted: boolean = false;
  username: any
  password: any
  constructor(private router: Router,
    private fb: FormBuilder,
     private challengeService:ChallengeService,
    private utils: utilsService,
    private spinner: NgxSpinnerService,
    private toastr:ToastrService) { 
      this.loadcaptcha();
      this.loginForm = this.fb.group({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        captchacode: new FormControl('', [Validators.required])
          })
    }

  ngOnInit(): void {

  }

  get loginFormCtrls() {
    return this.loginForm.controls;
  }
  submitLoginForm() {
    this.submitted = true;


    if (this.loginForm.invalid)
      return;
    // if (this.utils.decrypt(sessionStorage.getItem("Capchid")) == this.loginForm.value.captchacode) {
      let registerObj = {
        "email": this.loginForm.value.email,
        "password": this.loginForm.value.password,
      }

      if(this.loginForm.value.email == this.username){
        if(this.loginForm.value.password == this.password){
          sessionStorage.setItem("token", 'token is valid');
          sessionStorage.setItem("role", 'Website Admin');
          this.router.navigate(['/challengesadmin'])
        }
        else{
          alert('Username or Password is incorrect') 
          this.loginForm.reset()
          return;
        }
      }
      else{
        alert('Username or Password is incorrect')
        this.loginForm.reset()
      }
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
  loginNew(){
    this.submitted = true;
    if (this.loginForm.invalid)
      return;
      this.spinner.show()
    // if (this.utils.decrypt(sessionStorage.getItem("Capchid")) == this.loginForm.value.captchacode) {
      let registerObj = {
        "pType": 1,
        "email":  (this.loginForm.value.email).toUpperCase(),
        "password": this.loginForm.value.password,
        "capchid": this.captchaData?.Capchid,
        "captchacode": this.loginForm.value.captchacode
      }
      console.warn('registerObj', registerObj)
      this.challengeService.login(registerObj).subscribe((data: any) => {
        console.warn('data', data)
        if (data['status'] == "Success") {
          this.spinner.hide()
          sessionStorage.setItem("token", data['data']);
          this.router.navigate(['/challengesadmin']);
          this.toastr.success("Success");
        }
        else if (data['status'] == "Failed") {
          this.submitted = false;
          this.toastr.error(data["message"], "Failed")
          this.spinner.hide();
          this.loginForm.patchValue({
            captchacode: ''
          })
          this.loadcaptcha()
        }
      }, error => {
        this.spinner.hide();
        this.submitted = false;
        this.loginForm.patchValue({
          captchacode: ''
        })
        this.toastr.error("User doesn't exist/Wrong credentials", "Failed")
        this.loadcaptcha()
      })
  }
}
