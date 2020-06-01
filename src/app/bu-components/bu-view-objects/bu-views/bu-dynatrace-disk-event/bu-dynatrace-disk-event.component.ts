import { Component, OnInit, ElementRef } from '@angular/core';
//
import { BuDiskEventService} from '../../../bu-shared-objects/bu-services';
//
import { BuDiskEvent } from '../../../bu-shared-objects/bu-interfaces'

@Component({
  selector: 'app-bu-dynatrace-disk-event',
  templateUrl: './bu-dynatrace-disk-event.component.html',
  styleUrls: ['./bu-dynatrace-disk-event.component.css']
})
export class BuDynatraceDiskEventComponent implements OnInit {
  //
  buDiskEvents: BuDiskEvent[] = [];
  buDiskEvent: BuDiskEvent;
  buDiskEventDetail: any;
  loading = false;
  constructor(private buDiskEventService: BuDiskEventService, private el: ElementRef) { }

  ngOnInit(): void {
  }

}
