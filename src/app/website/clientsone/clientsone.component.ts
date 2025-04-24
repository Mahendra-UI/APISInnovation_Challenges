import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientsone',
  templateUrl: './clientsone.component.html',
  styleUrls: ['./clientsone.component.css']
})
export class ClientsoneComponent implements OnInit {

  constructor() { }

  slideConfig = {

    "slidesToShow": 3,
    "slidesToScroll": 1,
    // "nextArrow": "<div class='nav-btn next-slide'></div>",
    // "prevArrow": "<div class='nav-btn prev-slide'></div>",
    // "nextArrow": "['←']",
    // "prevArrow": "['←']",
    "dots": true,
    "infinite": false,
    "arrows": false,
    responsive: [{
 
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }
 
    }, {
 
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: true
      }
 
    }, {
 
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

}
