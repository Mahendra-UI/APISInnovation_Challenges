import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-civilsuppliesqueries',
  templateUrl: './civilsuppliesqueries.component.html',
  styleUrls: ['./civilsuppliesqueries.component.css']
})
export class CivilsuppliesqueriesComponent implements OnInit {

  queryForm! : FormGroup
  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    
  }
  onSubmitQueryForm() {

  }
}
