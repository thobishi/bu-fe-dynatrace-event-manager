import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { BuDynatraceDiskEventComponent, BuDynatraceComponent } from '../../bu-view-objects/bu-views';


const routes: Routes = [
  { path: '', redirectTo: '/bu-dynatrace', pathMatch: 'full'},
  {
    path: 'bu-dynatrace',
    component: BuDynatraceComponent,
    children: [
      { path: '', redirectTo: 'disk-events', pathMatch: 'full' },
      { path: 'disk-events', component: BuDynatraceDiskEventComponent }
    ]
  },
  { path: '**', redirectTo: '/bu-dynatrace', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BuAppRoutingModule { }
