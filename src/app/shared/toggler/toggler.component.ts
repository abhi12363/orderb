import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Entry } from './Entry';
import { element } from 'protractor';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.css']
})
export class TogglerComponent implements OnInit{
  
  @Input() entries:Entry[];
  @Input() default:string;
  @Input() key:string;
  displayText:string;
  @Input() width:string="71px";

  entry:any={
    name:this.key,
    value:false
  }

  constructor(private renderer: Renderer2,private elRef:ElementRef) {
    this.entries=[{label:"YES",value:"1"},{label:"NO",value:"0"}];
  }
  
  @Output() onSelection:EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('span') span:ElementRef;
  onSelectionChange(e){
    if(e.target.checked){
      this.displayText=this.getEntryById("1")[0].label;
      if(this.span.nativeElement.classList.contains('no-enable'))
        this.renderer.removeClass(this.span.nativeElement,"no-enable");
      this.renderer.addClass(this.span.nativeElement,"yes-enable");
    }else{
      this.displayText=this.getEntryById("0")[0].label;
      if(this.span.nativeElement.classList.contains('yes-enable'))
        this.renderer.removeClass(this.span.nativeElement,"yes-enable");
      this.renderer.addClass(this.span.nativeElement,"no-enable");
    }
    this.entry.key=this.key;
    this.entry.value = e.target.checked;
    console.log("Togger value  : "+"{'key':"+this.key+",'value':"+e.target.checked+"}");
    this.onSelection.emit(JSON.stringify(this.entry));
  }

  @ViewChild('toggler') toggler:ElementRef;
  ngOnInit(): void {
    if(this.default == "1"){
      this.toggler.nativeElement.checked=true;
      this.displayText=this.getEntryById("1")[0].label;
      this.renderer.addClass(this.span.nativeElement,"yes-enable");
    }else{
      this.toggler.nativeElement.checked=false;
      this.displayText=this.getEntryById("0")[0].label;
      this.renderer.addClass(this.span.nativeElement,"no-enable");
    }
  }
  
 getEntryById(id):Entry[]{
  return this.entries.filter(x => x.value === id);
 }
}
