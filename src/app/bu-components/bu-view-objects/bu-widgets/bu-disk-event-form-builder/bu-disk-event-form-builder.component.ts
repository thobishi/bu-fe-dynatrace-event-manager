import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//
import { BuDiskEventService } from '../../../bu-shared-objects/bu-services';
//
import { BuDiskEvent, BuDiskEventDetail } from '../../../bu-shared-objects/bu-interfaces';

@Component({
  selector: 'app-bu-disk-event-form-builder',
  templateUrl: './bu-disk-event-form-builder.component.html',
  styleUrls: ['./bu-disk-event-form-builder.component.css']
})
export class BuDiskEventFormBuilderComponent implements OnInit {
  closedOpen = '<>'
  isOpen = false;
  loading = false;
  tagFilters: any[];
  threshold: number;
  diskPattern: string;
  buForm: FormGroup;
  @Input() DiskEvetitem: any;

  constructor(
    private buFormBuilder: FormBuilder,
    private buDiskEventService: BuDiskEventService,
  ) { }

  ngOnInit(): void {
    //
    this.buForm = this.buFormBuilder.group({
      threshold_percent: [1, [Validators.required]]
    });
  }
  //
  openConfigBox() {
    //
    if ( this.isOpen === true ) {
      //
      this.isOpen = false;
      this.closedOpen = '<>';
    } else {
      this.isOpen = true;
      this.closedOpen = 'X';
    }

  }
  //
  getTagList(tagArray: any): string {
    let tags = ''
    tagArray.forEach(element => {
      //
      if ( tags === '' ) {
        //
        tags = tags + element.key;
      } else {
        tags = tags + ';' + element.key;
      }
    });
    return tags
  }
  //
  saveAlertInstance(): void {
    
  }

}
