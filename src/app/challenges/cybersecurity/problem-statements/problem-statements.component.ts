import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-problem-statements',
  templateUrl: './problem-statements.component.html',
  styleUrls: ['./problem-statements.component.css']
})
export class ProblemStatementsComponent implements OnInit {

  constructor(private router: Router) { }
  slideConfig = {

    "slidesToShow": 3,
    "slidesToScroll": 1,
    // "nextArrow": "<div class='nav-btn next-slide'></div>",
    // "prevArrow": "<div class='nav-btn prev-slide'></div>",
    // "nextArrow": "['←']",
    // "prevArrow": "['←']",
    "dots": false,
    "infinite": false,
    "arrows": false,
    loop: true,
    responsive: [{
 
      breakpoint: 1024,
      settings: {
        infinite: true,
        // slidesToShow: 3,
        // slidesToScroll: 1,
      }
 
    }, {
 
      breakpoint: 600,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false
      }
 
    }, {
      slidesToShow: 1,
      slidesToScroll: 1,
      breakpoint: 300,
      settings: "unslick" // destroys slick
 
    }]
  };

  
  

  slickInit(e:any) {
  }

  breakpoint(e:any) {
  }

  afterChange(e: any) {
  }

  beforeChange(e:any) {
  }

  ngOnInit(): void {
  }

  apply(event: any){
    console.warn('event', event)
    this.router.navigate(['/cybersecurity/problemstatements/', event])
  }
}
