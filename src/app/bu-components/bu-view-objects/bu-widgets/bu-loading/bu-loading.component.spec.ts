import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuLoadingComponent } from './bu-loading.component';

describe('BuLoadingComponent', () => {
  let component: BuLoadingComponent;
  let fixture: ComponentFixture<BuLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
