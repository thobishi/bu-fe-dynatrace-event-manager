import { Component, OnInit } from '@angular/core';
//
import { BuDiskEventService} from '../../../bu-shared-objects/bu-services';
//
import { BuDiskEvent } from '../../../bu-shared-objects/bu-interfaces'
@Component({
  selector: 'app-bu-dynatrace-disk-event-list',
  templateUrl: './bu-dynatrace-disk-event-list.component.html',
  styleUrls: ['./bu-dynatrace-disk-event-list.component.css']
})
export class BuDynatraceDiskEventListComponent implements OnInit {
  //
  buDiskEvents: BuDiskEvent[] = [];
  buDiskEvent: BuDiskEvent;
  buDiskEventDetail: any;
  loading = false;
  constructor(private buDiskEventService: BuDiskEventService) { }

  ngOnInit(): void {
    this.getDiskEvents();
  }
  //
  getDiskEvents() {
    //
    this.loading = true;
    this.buDiskEventService.getDiskEvents()
    .subscribe(
      //
      (res:BuDiskEvent[]) => {
        //
        this.buDiskEvents = res;
        this.loading = false;
      }
    );
  }

}
