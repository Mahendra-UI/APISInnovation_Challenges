import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-bannerone',
  templateUrl: './bannerone.component.html',
  styleUrls: ['./bannerone.component.css']
})
export class BanneroneComponent implements OnInit {

  constructor(config: NgbCarouselConfig, private el: ElementRef,
    private route: ActivatedRoute, private router: Router) { 
      config.interval = 2000000;  
      config.wrap = true;  
      config.keyboard = false;  
      config.pauseOnHover = false;
      config.showNavigationArrows = true;
      config.showNavigationIndicators = false;
  }
  customOptions: OwlOptions = {
    autoplay:true,
autoplayTimeout:3000,
autoplayHoverPause:true,
    loop: true,
    rtl:false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoWidth:false,
    nav:true,
    margin:10,
    // navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    navText : ['←','→'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    }
  }

  slideConfig = {

    "slidesToShow": 3,
    "slidesToScroll": 1,
    // "nextArrow": "<div class='nav-btn next-slide'></div>",
    // "prevArrow": "<div class='nav-btn prev-slide'></div>",
    // "nextArrow": "['←']",
    // "prevArrow": "['←']",
    "dots": true,
    "infinite": false,
    "arrows": true,
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
        dots: true
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
