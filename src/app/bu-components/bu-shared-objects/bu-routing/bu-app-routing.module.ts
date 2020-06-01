import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import {
  BuDynatraceComponent,
  BuDynatraceDiskEventComponent,
  BuDynatraceDiskEventListComponent,
  BuDynatraceDiskEventDetailComponent
} from '../../bu-view-objects/bu-views';


const routes: Routes = [
  { path: '', redirectTo: 'bu-dynatrace', pathMatch: 'full'},
  {
    path: 'bu-dynatrace',
    component: BuDynatraceComponent,
    children: [
      { path: '', redirectTo: 'disk-events', pathMatch: 'full' },
      { 
        path: 'disk-events',
        component: BuDynatraceDiskEventComponent,
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: BuDynatraceDiskEventListComponent },
          { path: 'list/:rulename', component: BuDynatraceDiskEventDetailComponent}
        ]
      }
    ]
  },
  { path: '**', redirectTo: 'bu-dynatrace', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BuAppRoutingModule { }
