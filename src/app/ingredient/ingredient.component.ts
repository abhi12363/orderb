import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  
  constructor(private _appService:AppService) { }

  ngOnInit() {
    this.getIngData();
    this.getCategory();
  }
  
  ingredient:any={
    name:"",
    isActive:false,
    category:""

  };
  columnDefs:any[] = [
    {headerName:"Name",property:"name"},
    {headerName:"Category",property:"category"},
    {headerName: "Unit", property: "unit"},
    {headerName: "Status", property: "isActive"},
    {headerName: "Actions"}

  ];
  rowData:any[];
  ingCategories:any[];
  getValue(event){
    this.ingredient.isActive = JSON.parse(event).value;
  }

  addIngredient():void{
    console.log(JSON.stringify(this.ingredient.category.id));
    this.ingredient.category = this.ingredient.category.id;
    this._appService.serverComunication('/setupIng',this.ingredient).subscribe(response =>{
      console.log(response);
      //this.rowData = response.responseResult._DATA;
    },error => console.log(error));
  }

  getIngData():void{
    this._appService.getCommunication('/getAllIngInfo').subscribe(response =>{
      this.rowData = response.responseResult._DATA;
    },error => console.log(error));
  }

  getCategory():void{
    this._appService.getCommunication('/getIngCatInfo').subscribe(response =>{
      this.ingCategories = response.responseResult._DATA;
      console.log(response.responseResult._DATA);
    },error => console.log(error));
  }
}
