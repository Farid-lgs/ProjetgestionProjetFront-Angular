import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsModuleComponent } from './details-module.component';

describe('DetailsModuleComponent', () => {
  let component: DetailsModuleComponent;
  let fixture: ComponentFixture<DetailsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
