import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChallengesadminlandingComponent } from '../challengesadminlanding/challengesadminlanding.component';

@Component({
  selector: 'app-challengesadminleftpanel',
  templateUrl: './challengesadminleftpanel.component.html',
  styleUrls: ['./challengesadminleftpanel.component.css']
})
export class ChallengesadminleftpanelComponent implements OnInit {

  subscription!:Subscription;
  profilePic:any;
  innerWidth:any;
  constructor(public router:Router,
     public component:ChallengesadminlandingComponent) {
    
  }
  @Input() expand!:boolean;
  userName!:string;
  email!:string;
  district!:string;
  Role:any;

  ngOnInit(): void {
    this.getDevice();
}

ngAfterViewInIt(){
  
}

getDevice(){
  this.innerWidth = window.innerWidth;
  if(this.innerWidth < 992){
   document.querySelector('.header')?.classList.add('mobileHeader');
   document.querySelector('.navbar-light')?.classList.add('fixed-top');
  }else{
    document.querySelector('.header')?.classList.remove('mobileHeader');
   document.querySelector('.navbar-light')?.classList.remove('fixed-top');
  }
}

@HostListener('window:resize',['$event'])
onResize(){
  this.getDevice()
}


}
