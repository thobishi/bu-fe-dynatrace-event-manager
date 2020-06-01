import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BuNavbarComponent } from './bu-components/bu-view-objects/bu-widgets/bu-navbar/bu-navbar.component';
import { BuAppRoutingModule } from './bu-components/bu-shared-objects/bu-routing/bu-app-routing.module';
import { BuDynatraceDiskEventComponent } from './bu-components/bu-view-objects/bu-views/bu-dynatrace-disk-event/bu-dynatrace-disk-event.component';
import { BuDynatraceComponent } from './bu-components/bu-view-objects/bu-views/bu-dynatrace/bu-dynatrace.component';
import { BuDynatraceDiskEventDetailComponent } from './bu-components/bu-view-objects/bu-views/bu-dynatrace-disk-event-detail/bu-dynatrace-disk-event-detail.component';
import { BuLoadingComponent } from './bu-components/bu-view-objects/bu-widgets/bu-loading/bu-loading.component';
import { BuDynatraceDiskEventListComponent } from './bu-components/bu-view-objects/bu-views/bu-dynatrace-disk-event-list/bu-dynatrace-disk-event-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuDiskEventFormBuilderComponent } from './bu-components/bu-view-objects/bu-widgets/bu-disk-event-form-builder/bu-disk-event-form-builder.component';


@NgModule({
  declarations: [
    AppComponent,
    BuNavbarComponent,
    BuDynatraceDiskEventComponent,
    BuDynatraceComponent,
    BuDynatraceDiskEventDetailComponent,
    BuLoadingComponent,
    BuDynatraceDiskEventListComponent,
    BuDiskEventFormBuilderComponent
  ],
  imports: [
    BrowserModule,
    BuAppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
