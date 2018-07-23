import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.css']
})
export class MenuModalComponent implements OnInit {
  category:any={
    majorCategory:"",
    minorCategory:""
  };
  categories:any[];

  constructor(private _appService:AppService) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory():void{
    this._appService.getCommunication('/getMenuItemGrpInfo').subscribe(response =>{
      this.categories = response.responseResult._DATA;
      console.log(this.categories);
    },error => console.log(error));
  }

}
