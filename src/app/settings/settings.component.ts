import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { ISetting } from './ISetting';
import { ModalEntry } from '../shared/modal/ModalEntry';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings:ISetting[];
  executeAction: EventEmitter<any> = new EventEmitter();
  entries:ModalEntry[]=[
    {label:"Organization Profile",route:"orgprofile",showTab:true},
    {label:"Organization Settings",route:"orgsetting",showTab:true},
    {label:"Format Settings",route:"format",showTab:true},
    {label:"Sites",route:"site",showTab:true},
    {label:"Admin Users",route:"admins",showTab:true},
    {label:"Manage User Privilleges",route:"privilleges",showTab:true}
  ];
  constructor() { 
    this.settings=[
      {
        imgUrl:"https://cdn.hubworks.com/test/201801192224/assets/images/account/settingApp/myOrg.svg",
        displayName:"My Organization",
        actionUrl:"organization"
      },
      {
        imgUrl:"https://cdn.hubworks.com/test/201801192224/assets/images/account/settingApp/billing_sub.svg",
        displayName:"Billing & Subscription",
        actionUrl:"billing"
      },
      {
        imgUrl:"https://cdn.hubworks.com/test/201801192224/assets/images/account/settingApp/site_setting.svg",
        displayName:"Site Settings",
        actionUrl:"site"
      },
      {
        imgUrl:"https://cdn.hubworks.com/test/201801192224/assets/images/account/settingApp/profile_setting.svg",
        displayName:"Profile Settings",
        actionUrl:"profile"
      }
    ]
  }

  ngOnInit() {
    
  }
  @ViewChild('organization') organization;
  @ViewChild('billing') billing;
  @ViewChild('site') site;
  @ViewChild('profile') profile;
  action(action){
    console.log(action);
    if(action === 'organization')
      this.organization.show();
    else 
      if(action === 'billing')
        this.billing.show();
        else 
          if(action === 'site')
            this.site.show();
            else 
            if(action === 'profile')
              this.profile.show();
  }

  performAction(){
    this.executeAction.emit();
  }
}
