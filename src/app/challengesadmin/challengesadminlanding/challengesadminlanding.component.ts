import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-challengesadminlanding',
  templateUrl: './challengesadminlanding.component.html',
  styleUrls: ['./challengesadminlanding.component.css']
})
export class ChallengesadminlandingComponent implements OnInit, OnDestroy {

  // @ViewChild('dynamicModal') dynamicModal!:ElementRef;
  header!:boolean

  // subscription: Subscription;
  subscription: Subscription = new Subscription();

  profilePic:any;
  userExistsInfo: any;
  userId: any;
  name: any;
  userExists: any;
  userExistsLogin!: boolean;
  imageUrl!: string;
  imgProfile!: boolean;
  screenWidth:any;
  mobile!: boolean;
  sat_user_id: any;
  constructor(public router:Router,private renderer:Renderer2,private ele:ElementRef){
    
 //   this._document.location.reload();

     
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((eve:any) => {

     if(this.screenWidth < 992.98){
      document.querySelector('.modal-layer')?.remove();
      document.querySelector('.left-panel')?.classList.add('active')
     }
      

    });
  }

  show: boolean = true;

menuVisible: boolean = false;

onActivate(event:any) {
  window.scroll(0,0);
  //or document.body.scrollTop = 0;
  //or document.querySelector('body').scrollTo(0,0)
}

// toggleMenu(){
//   this.menuVisible = !this.menuVisible
// }
  ngOnInit() {
    this.getScreenSize()
    //sessionStorage.setItem("UserDetails",'false')
    // window.location.reload();
   // console.log(this.name,this.userExists)
    this.userExistsLogin = false;
    //localStorage.setItem("loggedIn",'false');
   // sessionStorage.setItem('loggedIn','false');
  //  let result = localStorage.getItem("loggedIn");
  //  if(result!='false'){
  //   this.getProfileData()
  //  }

    // let promise  = new Promise((resolve,reject)=>{
    //   resolve(this.getScreenSize)
    // })

    // promise.then(()=>{
    //     let ele:any = document.querySelector('.left-panel'); 
    //     this.renderer.removeClass(ele,'active');
    //   }
    // )
  //  setTimeout(()=>{
  //   this.getScreenSize()
  //  })
 
// let promise = new Promise((resolve,reject)=>{
//    resolve(result)
// })

// promise.then(()=>{
//   console.log(result)
//   if(result=='true'){
//     setTimeout(()=>{
      
//     },100)
    
//   }
// }
  
// );

  }

  userData:any;Name!:string
getProfileData(){
  let payload = new FormData();
  let userExists:any = sessionStorage.getItem('UserDetails');
  this.userExistsInfo = JSON.parse(userExists).userexists;
  this.userId = JSON.parse(userExists).loginid;
  payload.append('userid',this.userId);
}


toggleMenu(){
  this.menuVisible = !this.menuVisible;
  this.screenWidth = window.innerWidth;
  if(this.screenWidth < 993){
   const div = this.renderer.createElement('div');
  // this.renderer.setAttribute(div,'#dynamicModal');
   //div.classList.add('modal-backdrop')
   div.classList = 'modal-backdrop fade show modal-layer'
   const body:any = document.querySelector('body');
   body.appendChild(div);
   let ele = document.querySelector('.left-panel');
     if(ele?.classList.contains('active')){
      setTimeout(()=>{
        ele?.classList.remove('active');
      },100)
     }
     else{
      ele?.classList.add('active');
     }

   document.querySelector('.modal-layer')?.addEventListener('click',(eve:any)=>{
     ele?.classList.add('active');
     let rootEle = this.renderer.selectRootElement('.modal-layer');
     rootEle.remove();
   })

  }
}
  

  //  getRole(){
  //   let userInfo:any = sessionStorage.getItem('UserDetails');
  //   this.Role = JSON.parse(userInfo).role_name;
  //  }

  getScreenSize(){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth < 767){
      document.querySelector('.sidebar')?.classList.add('mobile-active')
    }
  }
  ngOnDestroy(): void{
    sessionStorage.clear()
  }
}
