import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }
  slideConfig = {

    "slidesToShow": 3,
    "slidesToScroll": 1,
    // "nextArrow": "<div class='nav-btn next-slide'></div>",
    // "prevArrow": "<div class='nav-btn prev-slide'></div>",
    // "nextArrow": "['←']",
    // "prevArrow": "['←']",
    "dots": true,
    "infinite": true,
    "arrows": true,
    "autoplay": true,
    "autoplaySpeed": 1500,
    "cssEase": "ease",
    // "focusOnSelect": true,
    // "focusOnChange": true,
    
    "lazyLoad": 'ondemand',
    "mobileFirst": true,
    "pauseOnHover": true,
    "swipe": true,
    "swipeToSlide": true,
    "adaptiveHeight": true,
    "draggable": true,
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
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false
      }
      // settings: "unslick" // destroys slick
 
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
