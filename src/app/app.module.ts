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

@NgModule({
  declarations: [
    AppComponent,
    BuNavbarComponent,
    BuDynatraceDiskEventComponent,
    BuDynatraceComponent,
    BuDynatraceDiskEventDetailComponent,
    BuLoadingComponent
  ],
  imports: [
    BrowserModule,
    BuAppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
