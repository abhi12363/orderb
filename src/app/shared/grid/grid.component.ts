import { Component, OnInit, Input } from '@angular/core';
import { IHeader } from './GHeader';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnChanges {
  
  @Input() header:IHeader[];
  @Input() data:any[];
  colsize:number;

  constructor() {
    
   }
   ngOnChanges(): void {
    console.log(this.data);
    this.colsize = this.header.length;
  }
}
