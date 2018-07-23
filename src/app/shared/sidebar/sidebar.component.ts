import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { SideEntry } from './SideEntry';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit,AfterViewInit{

  @Input() items:SideEntry[];
  selectedIndex:number = 0;
  isSetup:boolean=false;
  constructor(private router:Router,private route: ActivatedRoute){}

  ngAfterViewInit(): void {
    
  }
  ngOnInit() {
    if(this.isSetup){
      this.router.navigate(['setup']);
    }else{
      if(this.selectedIndex==0){
        this.router.navigate(['dashboard']);
      }
    }
    
      
  }

  expand(e){
    e.target.classList.remove('active'); 
  }

  shink(e){
    e.target.classList.add('active'); 
    
  }
  public setActive(index: number):void{
    this.selectedIndex = index;
  }
  routerLink(entry):string{
    console.log(entry.actionUrl);
    return entry.actionUrl;
  }

}
