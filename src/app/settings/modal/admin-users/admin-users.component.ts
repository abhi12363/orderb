import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  sites:any[]=[
    {
      id:"site1",
      name:"Site 1",
      email:"site1@gmail.com",
      contact:"1111122222"
    },
    {
      id:"site2",
      name:"Site 2",
      email:"site2@gmail.com",
      contact:"3333344444"
    },
    {
      id:"site3",
      name:"Site 3",
      email:"site3@gmail.com",
      contact:"5555555555"
    }
  ];
  selectedIndex:number = 0;
  entry:any=this.sites[this.selectedIndex];
  public selectedEmp = {
    id:1,
    name:"T2 Singh"
  };
  select(index:number,value):void{
    this.entry = value;
    this.selectedIndex = index;
  }
  columnDefs:any[] = [
    {headerName:"User",property:"user"},
    {headerName: "Enable billing rights", property: "menuItemGroupID",width:50}
  ];
  
  rowData:any = [
    {
      id:1,
      name:"T2 Singh"
    },
    {
      id:2,
      name:"Abhishek Singh"
    },
    {
      id:3,
      name:"Jyoti Sharma"
    },
    {
      id:4,
      name:"Avinash Singh"
    },
    {
      id:5,
      name:"Rita Singh"
    },
    {
      id:6,
      name:"Arbind Singh"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
