import { Component, OnInit, ViewChild, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import { SideEntry } from '../shared/sidebar/SideEntry';
import { UserDetail } from '../interface/UserDetail';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public aToken:any;

  entries:SideEntry[]=[
    {
      "actionurl":"dashboard",
      "text":"Home",
      "icon":"glyphicon-home",
      "isParent":true
    },
    {
      "actionurl":"ingcat",
      "text":"Ingredient Categories",
      "icon":"glyphicon-send",
      "isParent":false
    },
    {
      "actionurl":"ing",
      "text":"Ingredient",
      "icon":"glyphicon-send",
      "isParent":false
    },
    {
      "actionurl":"prep",
      "text":"Prep",
      "icon":"glyphicon-send",
      "isParent":false
    },
    {
      "actionurl":"categories",
      "text":"Menu Categories",
      "icon":"glyphicon-send",
      "isParent":false
    },
    {
      "actionurl":"menu",
      "text":"Menu",
      "icon":"glyphicon-duplicate",
      "isParent":false
    },
    {
      "actionurl":"settings",
      "text":"Settings",
      "icon":"glyphicon-wrench",
      "isParent":false
    }

  ];

  constructor(private renderer: Renderer2,private _appService:AppService,private _route:ActivatedRoute) { }

  ngOnInit() {
    
  }
 
}
