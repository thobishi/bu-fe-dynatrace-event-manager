import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuDynatraceDiskEventListComponent } from './bu-dynatrace-disk-event-list.component';

describe('BuDynatraceDiskEventListComponent', () => {
  let component: BuDynatraceDiskEventListComponent;
  let fixture: ComponentFixture<BuDynatraceDiskEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuDynatraceDiskEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuDynatraceDiskEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
