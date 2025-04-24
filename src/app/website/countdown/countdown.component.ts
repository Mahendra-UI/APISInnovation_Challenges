import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountDownComponent implements OnInit {
  @ViewChild('cd', { static: false })
  private countdown!: CountdownComponent;
  
  countDownDate:any = new Date('May 10, 2025 12:00:00').getTime();
  countDownTimer:any;
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  timerShow:boolean = true;
  date = setInterval(() => {
    var currentTime = new Date().getTime();
    var difference = this.countDownDate - currentTime;
    this.days = Math.floor(difference / (1000*60*60*24));
    this.hours = Math.floor((difference % (1000*60*60*24)) / (1000*60*60));
    this.minutes = Math.floor((difference % (1000*60*60)) / (1000*60));
    this.seconds = Math.floor((difference % (1000*60)) / 1000);
    // this.countDownTimer = this.days + "d " + this.hours + "h " + this.minutes + "m " + this.seconds + "s " ;
    if(difference < 0){
      clearInterval(this.date)
      // this.countDownTimer = "Expired";
      this.timerShow = false;
    }
  })
  
  constructor() {
   }

  ngOnInit(): void {
    
  }

}
