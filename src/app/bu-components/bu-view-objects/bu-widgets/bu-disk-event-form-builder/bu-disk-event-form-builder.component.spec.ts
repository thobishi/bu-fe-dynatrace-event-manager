import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuDiskEventFormBuilderComponent } from './bu-disk-event-form-builder.component';

describe('BuDiskEventFormBuilderComponent', () => {
  let component: BuDiskEventFormBuilderComponent;
  let fixture: ComponentFixture<BuDiskEventFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuDiskEventFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuDiskEventFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
