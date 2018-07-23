import { Component, OnInit, OnDestroy } from '@angular/core';
import { Entry } from '../../../shared/toggler/Entry';
import { CommonChild, eventSubscriber } from '../../../shared/modal/CommonChild';
import { SettingsComponent } from '../../settings.component';

@Component({
  selector: 'app-org-settings',
  templateUrl: './org-settings.component.html',
  styleUrls: ['./org-settings.component.css']
})
export class OrgSettingsComponent implements CommonChild, OnDestroy {
  constructor(private settingComponent: SettingsComponent) {
      this.executeAction = this.executeAction.bind(this);
      eventSubscriber(settingComponent.executeAction, this.executeAction);
  }
  ngOnDestroy(): void {
      eventSubscriber(this.settingComponent.executeAction, this.executeAction, true);
  }
  entries:Entry[] =[{label:"ON",value:"1"},{label:"OFF",value:"0"}];
  
  getValue(event){
    console.log("----------  "+JSON.stringify(event));
  }
  executeAction() {
      alert('Organization Setting...');
  }
}
