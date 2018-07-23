import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GfilterComponent } from './gfilter.component';

describe('GfilterComponent', () => {
  let component: GfilterComponent;
  let fixture: ComponentFixture<GfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
