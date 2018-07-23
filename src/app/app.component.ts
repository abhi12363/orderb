import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { CanActivate } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    throw new Error("Method not implemented.");
  }
  isLogin:boolean=false;
  title = 'app';
  constructor(private _appService:AppService){}
  ngOnInit(): void {
   // if(this._appService.getAccessToken()!=null)
      this.isLogin = false;
  }
  login():void{
    this._appService.checkCredentials();
  }

  logout():void{
    this._appService.logout();
  }
  data():void{
    // this._appService.serverComunication("").subscribe(products => 
    //   {
    //       console.log(products);
    //   },error => console.log(error));
  }
  register():void{
    // this._appService.signUp();
  }
  visible():boolean{
    var showNav = !this._appService.isLogedIn();
    console.log("  -------  "+showNav);
    return showNav;
    // return true;
  }
  
  
}
