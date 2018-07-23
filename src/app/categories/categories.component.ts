import { Component, OnInit } from '@angular/core';
import { Category } from './Category';
import { AppService } from '../app.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  category:any={
    majorCategory:"",
    minorCategory:""
  };
  rowData:any[];
  constructor(private _appService:AppService) { }

  ngOnInit() {
    this.getCategory();
  }
  columnDefs:any[] = [
    {headerName: "Major Category", property: "menuItemGroupID"},
    {headerName:"Minor Category",property:"user"},
    {headerName: "Action", property: "menuItemGroupID"}

  ];

  addCategory():void{
    this._appService.serverComunication('/createMenuItemGroupInfo',this.category).subscribe(response =>{
      console.log(response);
      //this.rowData = response.responseResult._DATA;
      this.getCategory();
    },error => console.log(error));
    this.category={
      majorCategory:"",
      minorCategory:""
    };
  }
  getCategory():void{
    this._appService.getCommunication('/getMenuItemGrpInfo').subscribe(response =>{
      this.rowData = response.responseResult._DATA;
      console.log(this.rowData);
    },error => console.log(error));
  }

}
