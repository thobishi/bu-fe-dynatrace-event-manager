import { Component, OnInit } from '@angular/core';
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
