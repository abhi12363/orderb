import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngCategoryComponent } from './ing-category.component';

describe('IngCategoryComponent', () => {
  let component: IngCategoryComponent;
  let fixture: ComponentFixture<IngCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
