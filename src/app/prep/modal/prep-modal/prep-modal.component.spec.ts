import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepModalComponent } from './prep-modal.component';

describe('PrepModalComponent', () => {
  let component: PrepModalComponent;
  let fixture: ComponentFixture<PrepModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
