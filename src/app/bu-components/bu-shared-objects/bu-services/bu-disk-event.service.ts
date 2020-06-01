import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//
import { BuDiskEvent, BuDiskEventDetail } from '../bu-interfaces';

@Injectable({
  providedIn: 'root'
})
export class BuDiskEventService {
  //
  bu_api_server = 'http://nbpesmamqa1:8011';
  //
  constructor(private http: HttpClient) { }
  //
  getDiskEvents():Observable<BuDiskEvent[]> {
    //
    const uri = '/api/dynatrace-event-list';
    //
    return this.http.get<BuDiskEvent[]>(`${this.bu_api_server}${uri}`);
  }
  getDiskEventByRuleName(rule_name: string):Observable<BuDiskEventDetail> {
    const uri = '/api/dynatrace-event-list/';
    //
    return this.http.get<BuDiskEventDetail>(`${this.bu_api_server}${uri}${rule_name}`);
  }
}
