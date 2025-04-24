import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-cyber-ecosystem-partners',
  templateUrl: './cyber-ecosystem-partners.component.html',
  styleUrls: ['./cyber-ecosystem-partners.component.css']
})
export class CyberEcosystemPartnersComponent implements OnInit {

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
        items: 4
      },
      940: {
        items: 4
      }
    }
  }
  ngOnInit(): void {
  }
}
