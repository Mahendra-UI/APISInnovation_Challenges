import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  apiUrl: any;

  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.apiUrl
  }
  login(obj: any){
    let headers:any = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    // return this.httpClient.post(this.apiUrl + `Login?pType=1&email=${obj.email}&password=${obj.password}`, objE);
    var loginOb = {
      "pType": 1,
      "email": obj.email,
      "password": obj.password
    }
    return this.httpClient.post(this.apiUrl + `Login`, loginOb, headers);

  }
  getcaptcha()
  {
     return this.httpClient.get(this.apiUrl + `Getcaptcha`)
  }
  saveChallengesForm(ptype: any, challengeId: number, obj: any){
    return this.httpClient.post(this.apiUrl+`api/CSIRegistration/UserRegistration?pType=${ptype}&pChallengeId=${challengeId}`, obj)
  }
  getAllList(ptype: any) {
    return this.httpClient.get(this.apiUrl+`api/CSIRegistration/AllListGet?pType=${ptype}`)
  }
  getAllProblemStatementsList(ptype: any, challengeId: number) {
    return this.httpClient.get(this.apiUrl+`api/CSIRegistration/ChallengesSubListGet?pType=${ptype}&pChallengeId=${challengeId}`)
  }

  getUserDataByEmail(email: any, challengeId: number) {
    var obj = {
        "email": email,
        "challengeId": challengeId
    }
    return this.httpClient.post(this.apiUrl+`api/CSIRegistration/UserRegistrationDataGet`, obj)
  }

  checkEmailForChallenge(email: any, challengeId: number){
    return this.httpClient.get(this.apiUrl+`CheckExistingEmail?emailName=${email}&pChallengeId=${challengeId}`)
  }

  getAllApplicationsforAdmin(challengeId: any){
    var token = sessionStorage.getItem('token')
    return this.httpClient.get(this.apiUrl+`AllAdminGet?pType=1&pChallengeId=${challengeId}`)
  }

  logout(token :any){
    console.warn('calling')
    return this.httpClient.get(this.apiUrl + `Logout?Token=${token}`).subscribe();
  }

  getUserDocuments(email: any, challengeId: any){
    return this.httpClient.get(this.apiUrl + `api/CSIRegistration/UserDocumentsGet?Email=${email}&pChallengeId=${challengeId}`)
  }
}
