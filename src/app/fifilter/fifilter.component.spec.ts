import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifilterComponent } from './fifilter.component';

describe('FifilterComponent', () => {
  let component: FifilterComponent;
  let fixture: ComponentFixture<FifilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
