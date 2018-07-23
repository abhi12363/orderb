import { Injectable, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RequestOptions, RequestOptionsArgs, Request } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { UserDetail } from "./interface/UserDetail";
import { WSRequest } from "./common/WSRequest";


export class Foo {
  constructor(
    public id: number,
    public name: string) { }
}

@Injectable()
export class AppService {
  constructor(
    private _router: Router, private _http: HttpClient) { }

  private _appUrl: string = "http://localhost:8090/orderB/ws";
  private access_token: string;
  private isNavEnable: boolean = true;
  private user : UserDetail;
  authUrl: string = 'http://localhost:8080/SpringOAuth2/oauth/authorize?client_id=jsclient&response_type=token&scope=write&redirectUri=#url';

  checkCredentials() {
    console.log(this.access_token);
    if (!this.isLogedIn()) {
      document.location.href = this.authUrl;
    }
  }
  setUser(userDetail){
    this.user = userDetail;
  }
  getUser():UserDetail{
    return this.user;
  }

  saveToken(token) {
    // var expireDate = new Date().getTime() + (1000 * token.expires_in);
    // Cookie.set("access_token", token.access_token, expireDate);
    this.access_token = token;
    //this.checkCredentials();

  }

  isLogedIn(): boolean {

    if (this.access_token == null || this.access_token == undefined) {
      console.log("-------  " + this.access_token);
      return false;
    } else {
      return true;
    }
  }

  
  getCommunication(path:string):Observable<any>{
    return this._http.get<any>(this._appUrl+ path + "?access_token=" + this.access_token).do(data => console.log(data)).catch(this.handleError);
  }
  
  serverComunication(path: string,data:any): Observable<any> {
    return this._http.post<any>(this._appUrl + path + "?access_token=" + this.access_token, this.wrapRequest(data),{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).do(data => console.log('All : ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return Observable.throw(error.message);
  }
  
  private wrapRequest(data):WSRequest{
    return new WSRequest(data);
  }

  logout() {
    let data = {
      "token":this.access_token,
      "token_type_hint":"token"
    }
    this._http.post<any>("http://localhost:8080/SpringOAuth2/token/revoke"+ "?access_token=" + this.access_token, this.wrapRequest(data),{
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic '+this.access_token
      })
    }).do(data => console.log('All : ' + JSON.stringify(data)))
      .catch(this.handleError).subscribe(data => 
          {
              console.log(data);
          },error => console.log(error));
  }

  /*getResource(resourceUrl) : Observable<Foo>{
    var headers = new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer '+Cookie.get('access_token')});
    var options = new RequestOptions({ headers: headers });
    return this._http.get(resourceUrl, options)
                   .map((res:Response) => res.json())
                   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
 
  checkCredentials(){
    if (!Cookie.check('access_token')){
        this._router.navigate(['/login']);
    }
  } 
 
  */
}