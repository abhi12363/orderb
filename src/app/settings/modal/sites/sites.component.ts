import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  public site:any={
    name:"",
    email:"",
    contact:""
  };
  selectedIndex:number = 0;

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
  entry:any=this.sites[this.selectedIndex];
  select(index:number,value):void{
    this.entry = value;
    this.selectedIndex = index;
  }
  addSite():void{
    console.log(JSON.stringify(this.site));
    let site:any={
      name:"",
      email:"",
      contact:""
    };
    this.sites.push({name:this.site.name,email:this.site.email,contact:this.site.contact});
    this.site=site;
  }
  constructor() { }

  ngOnInit() {
  }

}
