import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChallengeService } from 'src/app/website/challenge.service';

@Component({
  selector: 'app-challengesadminheader',
  templateUrl: './challengesadminheader.component.html',
  styleUrls: ['./challengesadminheader.component.css']
})
export class ChallengesadminheaderComponent  implements OnInit {


  @Output() logout:EventEmitter<any> = new EventEmitter<any>();
  @Output() toggle:EventEmitter<any> = new EventEmitter<any>();
  //@Input() headerLogin!:boolean;
  profilePic:any;
  subscription!: Subscription;
  registerInfo!:boolean;
  innerWidth:any;
  constructor(private route:ActivatedRoute,private router:Router,
    private challengeService:ChallengeService) {
    // this.authService.profilePic.subscribe((pic)=>{
    //   this.profilePic = pic;
    // })


   }
  encrypted:any;
  ngOnInit(): void {
   // this.headerLogin = true;
   // console.log(this.subscription)
  }

   signOut(){
     let token = sessionStorage.getItem("token")
     console.log('token 5', token)
     this.challengeService.logout(token);;
     this.router.navigate(['/login'])
    sessionStorage.clear();
   }

   menuToggle(){
     this.toggle.emit();
   }

}
