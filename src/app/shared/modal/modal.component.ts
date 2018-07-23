import { Component, Input, ElementRef, AfterViewInit,EventEmitter} from '@angular/core';
import { ModalEntry } from './ModalEntry';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    // if(this.entries != undefined)
    //   this.route.navigate([{outlets:{modal:[this.entries[0].route]}}]);
    //this.location.replaceState("/dashboard/(aux:settings/(modal:orgprofile))");
  }
  public visible = false;
  private visibleAnimate = false;
  selectedIndex:number = 0;

  @Input() entries:ModalEntry[];
  @Input() title:string;

  

  constructor(private router:Router,private location: Location , private route: ActivatedRoute){}

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
    if(this.entries.length>0){
      console.log(this.entries[this.selectedIndex].route);
      // this.router.navigate([{outlets:{modal:[this.entries[this.selectedIndex].route]}}]);
      this.router.navigate(['/orgprofile'],{ relativeTo: this.route });
    }
  }
  
  public setActive(index: number):void{
    this.selectedIndex = index;
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  
}
