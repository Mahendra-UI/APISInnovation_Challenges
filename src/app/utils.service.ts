import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class utilsService {
     //commonmethhods

     encryptionKeys(): any {
      return {
        key: '7061737329913211',
        iv: '7061737329913211',
      };
    }
  
    encrypt(input: string): string {
      const keyVal = CryptoJS.enc.Utf8.parse(this.encryptionKeys().key);
      const ivVal = CryptoJS.enc.Utf8.parse(this.encryptionKeys().iv);
      const encrypted = CryptoJS.AES.encrypt(
        CryptoJS.enc.Utf8.parse(input),
        keyVal,
        {
          keySize: 128 / 8,
          iv: ivVal,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7,
        }
      ).toString();
      return encrypted;
    }
    formatDate(date:any) {
      const d = new Date(date);
      let month = '' + (d.getMonth() + 1);
      let day = '' + d.getDate();
      const year = d.getFullYear();
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      var todayDate = [year, month, day].join('-')
      return todayDate;
    }
    restrictFutureDate(event: any): boolean{
      var todayDate = new Date()
      var date1 = new Date(event)
      var date2 = todayDate
      if (date1.getTime() < date2.getTime()) {
        return true
      }
      return false
    }

   decrypt(input: string): string {
      const keyVal = CryptoJS.enc.Utf8.parse(this.encryptionKeys().key);
    const ivVal = CryptoJS.enc.Utf8.parse(this.encryptionKeys().iv);
    const decrypted = CryptoJS.AES.decrypt(input, keyVal, {
      keySize: 128 / 8,
      iv: ivVal,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);
    return decrypted;
  }

}
