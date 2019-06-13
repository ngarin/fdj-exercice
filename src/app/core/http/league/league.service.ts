import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private http: HttpClient) {}

  public fetch (): Observable<any> {
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?s=Soccer').pipe(
      map((data: any) => data.countrys.map(l => ({
        ...l,
        idLeague: parseInt(l.idLeague, 10),
      })))
    );
  }
}
