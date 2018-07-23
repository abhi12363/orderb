import { Component, OnInit } from '@angular/core';
import { Entry } from '../../../shared/toggler/Entry';

@Component({
  selector: 'app-manage-usr-privilleges',
  templateUrl: './manage-usr-privilleges.component.html',
  styleUrls: ['./manage-usr-privilleges.component.css']
})
export class ManageUsrPrivillegesComponent implements OnInit {

  constructor() { }
  entries:Entry[]=[{label:"Disable",value:"1"},{label:"Hidden",value:"0"}];
  ngOnInit() {
  }

  getValue(e){
    console.log("----------  "+JSON.stringify(e));
  }

}
