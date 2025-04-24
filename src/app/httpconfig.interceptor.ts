
import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpEvent, HttpResponse,HttpRequest, HttpHandler, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, map,tap } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChallengeService } from './website/challenge.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private router: Router, 
    private spinner:NgxSpinnerService,
    private challengeSer:ChallengeService) {
  }
  intercept(httpReq: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');
    var headers = new HttpHeaders()
    headers = new HttpHeaders().set("Authorization", "Bearer " + token)
    const AuthRequest = httpReq.clone({ headers: headers });
    if(token)
    {
    return next.handle(AuthRequest).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            if(event.status == 401) {
              let token = sessionStorage.getItem('token')
              this.challengeSer.logout(token);
              this.router.navigate(['/login'])
            }
            else if(event?.body?.data?.[0]?.status === 'Token Expired')
            {
              this.spinner.hide()
              let token = sessionStorage.getItem('token')
              this.challengeSer.logout(token);
            this.router.navigate(['/login'])
            }
          }
          return event;
        },
        error: (error) => {
          if(error.status == 401) {
            let token = sessionStorage.getItem('token')
            this.challengeSer.logout(token);
            this.router.navigate(['/login'])
          }
          else if(error.status == 404) {
            alert('Page Not Found!!!')
          }
          
        }

      }
      ))
}
    else
    return next.handle(AuthRequest)
}
}