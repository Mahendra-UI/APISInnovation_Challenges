import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cybersecuritylanding',
  templateUrl: './cybersecuritylanding.component.html',
  styleUrls: ['./cybersecuritylanding.component.css']
})
export class CybersecuritylandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onActivate(event:any) {
    window.scroll(0,0);
  }

}
