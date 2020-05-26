import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuDynatraceDiskEventDetailComponent } from './bu-dynatrace-disk-event-detail.component';

describe('BuDynatraceDiskEventDetailComponent', () => {
  let component: BuDynatraceDiskEventDetailComponent;
  let fixture: ComponentFixture<BuDynatraceDiskEventDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuDynatraceDiskEventDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuDynatraceDiskEventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
