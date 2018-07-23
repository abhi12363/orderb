import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-ing-category',
  templateUrl: './ing-category.component.html',
  styleUrls: ['./ing-category.component.css']
})
export class IngCategoryComponent implements OnInit {


  category:any={
    majorCategory:"",
    ingCategory:""
  };
  columnDefs:any[] = [
    {headerName: "Major Category", property: "menuItemGroupID"},
    {headerName:"Ingredient",property:"Ingredient"},
    {headerName: "Action", property: "menuItemGroupID"}

  ];
  rowData:any[]=[{
    majorCategory:"",
    ingCategory:""
  }];
  constructor(private _appService:AppService) { }

  ngOnInit() {
    this.getCategory();
  }

  addCategory():void{
    this._appService.serverComunication('/setupIngCat',this.category).subscribe(response =>{
      console.log(response);
      this.rowData = response.responseResult._DATA;
      this.getCategory();
    },error => console.log(error));
    console.log(JSON.stringify(this.category));
    this.category={
      majorCategory:"",
      ingCategory:""
    };
  }

  getCategory():void{
    this._appService.getCommunication('/getIngCatInfo').subscribe(response =>{
      this.rowData = response.responseResult._DATA;
      console.log(this.rowData);
    },error => console.log(error));
  }

}
