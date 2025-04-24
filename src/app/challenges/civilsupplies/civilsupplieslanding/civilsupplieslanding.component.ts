import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-civilsupplieslanding',
  templateUrl: './civilsupplieslanding.component.html',
  styleUrls: ['./civilsupplieslanding.component.css']
})
export class CivilsupplieslandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onActivate(event:any) {
    window.scroll(0,0);
  }

}
