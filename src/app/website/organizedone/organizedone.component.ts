import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-organizedone',
  templateUrl: './organizedone.component.html',
  styleUrls: ['./organizedone.component.css']
})
export class OrganizedoneComponent implements OnInit {

  constructor() { }
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
    navSpeed: 1000,
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
        items: 12
      },
      940: {
        items: 12
      }
    }
  }
  ngOnInit(): void {
  }

}
