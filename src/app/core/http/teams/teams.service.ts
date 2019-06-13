import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) {}

  public fetch(idLeague: number): Observable<any> {
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${idLeague}`).pipe(
      map((data: any) => data.teams.map(t => ({
        ...t,
        idTeam: parseInt(t.idTeam, 10),
      })))
    );
  }

  public fetchOne(idTeam: number): Observable<any> {
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${idTeam}`).pipe(
      map((data: any) => data.player)
    );
  }

}
