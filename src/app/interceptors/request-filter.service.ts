import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent, HttpResponse, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';


@Injectable()
export class RequestFilterService implements HttpInterceptor {

  constructor() { }

  addToken(req: HttpRequest<any>): HttpRequest<any> {
    console.log("Request ----->   " + req);
    return req.clone({ setHeaders: { Authorization: 'Bearer ' } })
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("intercepted request ... ");

    // Clone the request to add the new header.
    //const authReq = this.addToken(req);//req.clone({ headers: req.headers.set("headerName", "headerValue") });

    console.log("Sending request with new header now ..." + req);

    //send the newly created request
    return next.handle(req)
    .do(evt => {
      if (evt instanceof HttpResponse) {
        console.log('---> status:', evt.status);
        console.log('---> filter:', evt.body);
      }
    })
      .catch(error => {
        if (error instanceof HttpErrorResponse) {
          switch ((<HttpErrorResponse>error).status) {
            case 400:
              return this.handle400Error(error);
            case 500:
              return this.handle400Error(error);
            case 401:
              return this.handle401Error(req, next);
          }
        } else {
          return Observable.throw(error);
        }
      }) as any;
  }

  handle400Error(error:HttpErrorResponse){
    alert("Error in Persisting Data.");
    return Observable.throw(error);
  }
  handle401Error(req: HttpRequest<any>, next: HttpHandler) {
    // this.appService.saveToken(null);
    // this.appService.checkCredentials();
    return Observable.throw("");
  }

}
