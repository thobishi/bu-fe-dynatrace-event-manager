import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//
import { BuDiskEventService } from '../../../bu-shared-objects/bu-services';
//
import { BuDiskEvent, BuDiskEventDetail } from '../../../bu-shared-objects/bu-interfaces';

@Component({
  selector: 'app-bu-dynatrace-disk-event-detail',
  templateUrl: './bu-dynatrace-disk-event-detail.component.html',
  styleUrls: ['./bu-dynatrace-disk-event-detail.component.css']
})
export class BuDynatraceDiskEventDetailComponent implements OnInit {
  //
  buForm: FormGroup;
  ruleName: string;
  diskEvent: BuDiskEventDetail;
  diskFilters: string[];
  tagFilters: any[];
  loading = false;
  isOpen = false;
  constructor(
    private buDiskEventService: BuDiskEventService,
    private router: Router,
    private route: ActivatedRoute,
    private buFormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buForm = this.buFormBuilder.group({
      threshold_percent: [1, [Validators.required]]
    });
    this.getRuleDetails();
    
  }
  //
  openConfigBox() {
    //
    if ( this.isOpen === true ) {
      //
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }

  }
  getRuleDetails(): void {
    //
    this.loading = true;
    this.buDiskEventService.getDiskEventByRuleName(this.route.snapshot.paramMap.get('rulename'))
    .subscribe(
      //
      responseDisk => {
        //
        this.diskEvent = responseDisk;
        //#endregion
        if ( this.diskEvent != undefined ) {
          //
          this.ruleName = this.diskEvent.rule_name;
          this.diskFilters = this.diskEvent.rules;
        }
        //
        this.loading = false;
      }
    );
  }
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

  goToDiskEvents(): void {
    this.router.navigate(['/bu-dynatrace/disk-events/list']);
  }

}
