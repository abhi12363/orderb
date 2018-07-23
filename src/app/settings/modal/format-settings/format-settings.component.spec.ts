import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatSettingsComponent } from './format-settings.component';

describe('FormatSettingsComponent', () => {
  let component: FormatSettingsComponent;
  let fixture: ComponentFixture<FormatSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
