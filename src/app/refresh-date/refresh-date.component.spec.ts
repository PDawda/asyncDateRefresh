import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshDateComponent } from './refresh-date.component';

describe('RefreshDateComponent', () => {
  let component: RefreshDateComponent;
  let fixture: ComponentFixture<RefreshDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
