import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-googleformtesting',
  templateUrl: './googleformtesting.component.html',
  styleUrls: ['./googleformtesting.component.css']
})
export class GoogleformtestingComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.readData();
  }

  readData() {
    this.getFormData().subscribe((data: any) => {
      console.warn('data', data)
    })
  }

  getFormData() {
    var formId = '1HPn7P51nb1Mmz0LYkWo3eVYnax2FuUjs_D1z_0QHHSk'
    return this.httpClient.get(`https://forms.googleapis.com/v1/forms/${formId}`, {})
  }

}
