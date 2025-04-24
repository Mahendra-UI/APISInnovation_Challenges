import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: any;
  constructor(private _http: HttpClient)  {
    this.apiURL = environment.apiUrl
   }

  submitDownloadBrochure(obj:any){
    const response = this._http.post(this.apiURL + 'downloadbroucher', obj)
    return response
  }
  submitRegistation(obj:any){
    const response = this._http.post(this.apiURL + 'problemsubmission', obj)
    return response
  }

  getStates(){
    const response = this._http.get(this.apiURL + 'states')
    return response
  }

  numberOnly(event:any): boolean {
    // this.utils.pinCodeCheck(this.model.pincode);
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }


  mobileNumCheck(data:any): boolean {
    const response = data.match('[6-9]{1}[0-9]{9}');
    if (response) {
      const invalidNumbers = [
        '6666666666',
        '7777777777',
        '8888888888',
        '9999999999'
      ];
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < invalidNumbers.length; i++) {
        if (data === invalidNumbers[i]) {
          return false;
        }
      }
      return true;
    }
    else {
      return false;
    }
  }


  validateVerhoeff(num:any): boolean {
    if (num.length !== 12) {
      return false;
    }
    if (num === '333333333333' || num === '666666666666' || num === '999999999999') {
      return false;
    }


    const d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
    [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
    [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
    [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
    [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
    [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
    [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
    [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];


    // The permutation table
    const p = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
      [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
      [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
      [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
      [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
      [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
      [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]];


    // The inverse table
    const inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

    let cc;
    let c = 0;
    const myArray = this.StringToReversedIntArray(num);
    for (let i = 0; i < myArray.length; i++) {
      c = d[c][p[(i % 8)][myArray[i]]];
    }
    cc = c;
    if (cc === 0) {
      return true;
    }
    else {
      return false;
    }
  }

    /*
   * Converts a string to a reversed integer array.
   */
    StringToReversedIntArray(num:any): any {
      let myArray = [num.length];
      for (let i = 0; i < num.length; i++) {
        myArray[i] = (num.substring(i, i + 1));
      }
      myArray = this.Reverse(myArray);
      return myArray;
    }
  
    /*
     * Reverses an int array
     */
    Reverse(myArray:any): any {
      const reversed = [myArray.length];
      for (let i = 0; i < myArray.length; i++) {
        reversed[i] = myArray[myArray.length - (i + 1)];
      }
      return reversed;
    }

}
