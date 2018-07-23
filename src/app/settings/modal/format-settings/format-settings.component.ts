import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-format-settings',
  templateUrl: './format-settings.component.html',
  styleUrls: ['./format-settings.component.css']
})
export class FormatSettingsComponent implements OnInit {

  constructor() { }
  public selectedDate = {
    id:'ddmmyyyy',
    name:'DD/MM/YYYY'
  };
  public selectedTime ={
    id:'ddmmyyyy',
    name:'hh:mm a'
  };
  public FilterPlaceholder = 'Type here to filter elements...';

  public timeFormatOptions:any[]=[
    {
      id:'mmddyyyy',
      name:'hh:mm(Military Time)'
    },
    {
      id:'ddmmyyyy',
      name:'hh:mm a'
    }
  ]
  
  public dateFormatOptions:any[]=[
    {
      id:'mmddyyyy',
      name:'MM/DD/YYYY'
    },
    {
      id:'ddmmyyyy',
      name:'DD/MM/YYYY'
    },
    {
      id:'yyyymmdd',
      name:'YYYY/MM/DD'
    }
  ];

  ngOnInit() {
  }

}
