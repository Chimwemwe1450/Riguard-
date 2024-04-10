import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntityPostingService {

  private url = `${environment.baseUrl}inspection-data/save?cqmId=`;

  constructor(
    private http: HttpClient
  ) { }

  public postData<T>(data: T, id: string, endpoint?: string): Observable<any> {
    console.log('EntityPostingService: ', data);

    if (endpoint) {
      return this.http.post<any>(
        endpoint,
        data
      );
    }

    return this.http.post<any>(
      this.url + id,
      data
    );
  }
}
