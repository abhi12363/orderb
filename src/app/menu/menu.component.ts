import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../app.service';
import { IMenuItem } from './dto/MenuItem';
import { ModalEntry } from '../shared/modal/ModalEntry';

@Component({
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  
    rowData: IMenuItem[];
  //private gridOptions:GridOptions;
  public columnDefs:any[];
  entries:ModalEntry[]=[
    {label:"Add Menu",route:"addmenu",showTab:false}
  ];

  constructor(private _appService:AppService) { 
    //this.gridOptions = <GridOptions>{};
    this.columnDefs = [
      {headerName: "Name", property: "displayName",width:50},
      {headerName: "Category", property: "displayName",width:50},
      {headerName: "Cost", property: "displayName",width:50},
      {headerName: "Price", property: "displayName",width:50},
      {headerName: "Profit %", property: "displayName",width:50},
      {headerName: "Status", property: "displayName",width:50},
      {headerName: "Action", property: "displayName",width:50}
    ];
    
  }
  async ngOnInit() {
    /*this._appService.serverComunication("/getMenuItemsInfo").subscribe(menuInfo =>{
      let response = menuInfo;
      console.log("Response    :  "+response.responseResult._DATA);
      this.rowData = response.responseResult._DATA;
    },error => console.log(error));*/
  }
  @ViewChild('modal1') modal1;
  obj:any={};
  detail(obj){
    console.log(obj);
    this.modal1.show();
    this.obj = obj;
  }

}
