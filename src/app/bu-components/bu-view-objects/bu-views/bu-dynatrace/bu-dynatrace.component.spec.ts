import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuDynatraceComponent } from './bu-dynatrace.component';

describe('BuDynatraceComponent', () => {
  let component: BuDynatraceComponent;
  let fixture: ComponentFixture<BuDynatraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuDynatraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuDynatraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
