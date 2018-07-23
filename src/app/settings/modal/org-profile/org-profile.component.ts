import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonChild, eventSubscriber } from '../../../shared/modal/CommonChild';
import { SettingsComponent } from '../../settings.component';
import { OrgProfile } from './OrgProfile';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-org-profile',
  templateUrl: './org-profile.component.html',
  styleUrls: ['./org-profile.component.css']
})
export class OrgProfileComponent implements CommonChild, OnDestroy, OnInit {
  orgProfile:OrgProfile;

  constructor(private settingComponent: SettingsComponent, private appService:AppService) {
      this.executeAction = this.executeAction.bind(this);
      eventSubscriber(settingComponent.executeAction, this.executeAction);
  }
  ngOnDestroy(): void {
      eventSubscriber(this.settingComponent.executeAction, this.executeAction, true);
  }
  ngOnInit(): void {
    this.appService.serverComunication("orgInfo",null).subscribe(menuInfo =>{
      let response = menuInfo;
      console.log("Response    :  "+response.responseResult._DATA);
      this.orgProfile =  response.responseResult._DATA;
    },error => console.log(error));
  }
  
  executeAction() {
      
  }
}
