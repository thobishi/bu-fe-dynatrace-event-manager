import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//
import { BuDiskEvent } from '../bu-interfaces';

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
  getDiskEventPyRuleName(rule_name: string):Observable<DiskEventDetail> {
    const uri = '/api/dynatrace-event-list/';
    //
    return this.http.get<DiskEventDetail>(`${this.bu_api_server}${uri}${rule_name}`);
  }
}
export interface DiskEventDetail {
  Rule_name: string;
  Rule_Ids: string;
  Rules: any[];
}
