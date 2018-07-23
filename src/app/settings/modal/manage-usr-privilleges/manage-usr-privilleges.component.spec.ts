import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsrPrivillegesComponent } from './manage-usr-privilleges.component';

describe('ManageUsrPrivillegesComponent', () => {
  let component: ManageUsrPrivillegesComponent;
  let fixture: ComponentFixture<ManageUsrPrivillegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUsrPrivillegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUsrPrivillegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
