import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppService } from '../app.service';

@Injectable()
export class BasicGuard implements CanActivate, CanActivateChild {
  
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }
  constructor(private _appService:AppService,private _route:ActivatedRoute){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      
      return true;
       
  }
}
