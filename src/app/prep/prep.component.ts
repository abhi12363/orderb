import { Component, OnInit } from '@angular/core';
import { ModalEntry } from '../shared/modal/ModalEntry';

@Component({
  selector: 'app-prep',
  templateUrl: './prep.component.html',
  styleUrls: ['./prep.component.css']
})
export class PrepComponent implements OnInit {

  prep:any={
    id:"",
    name:"",
    unit:"",
    cost:"",
    status:""

  };
  columnDefs:any[] = [
    {headerName: "Prep Id", property: "id"},
    {headerName:"Prep Name",property:"name"},
    {headerName:"Unit",property:"unit"},
    {headerName: "Cost", property: "cost"},
    {headerName: "Status", property: "status"},
    {headerName: "Action"}

  ];
  rowData:any[]=[{
    id:"",
    name:"",
    unit:"",
    cost:"",
    status:""
  }];
  entries:ModalEntry[]=[
    {label:"Add Prep",route:"addprep",showTab:false}
  ];

  constructor() { }

  ngOnInit() {
  }

}
