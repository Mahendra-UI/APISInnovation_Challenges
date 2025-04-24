import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  closeBtn: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.router.events.subscribe((url:any) => {
      if(router.url == '/about'){
        this.clickme()
      }
      if(router.url == '/contactus'){
        this.contactusClick()
      }
    })
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

  clickme(){
    if(window.screenY > 600){
      window.scroll(0, 0)
    }
    window.scroll(0, 600)
  }

  contactusClick(){
    if(window.screenY > 600){
      window.scroll(0, 0)
    }
    window.scrollTo(0, document.body.scrollHeight);
  }

}
