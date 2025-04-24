import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-problemstatementsone',
  templateUrl: './problemstatementsone.component.html',
  styleUrls: ['./problemstatementsone.component.css']
})
export class ProblemstatementsoneComponent implements OnInit {

  constructor(private router: Router) { }
  slideConfig = {

    "slidesToShow": 4,
    "slidesToScroll": 1,
    // "nextArrow": "<div class='nav-btn next-slide'></div>",
    // "prevArrow": "<div class='nav-btn prev-slide'></div>",
    // "nextArrow": "['←']",
    // "prevArrow": "['←']",
    "dots": true,
    "infinite": false,
    "arrows": true,
    loop: true,
    responsive: [{
 
      breakpoint: 1024,
      settings: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
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
    this.router.navigate(['/problemstatement', event])
  }

}
