import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from '../models/claim';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http: HttpClient) { }

  public getClaimsList(): Observable<Claim[]>{
    return this.http.get<Claim[]>('http://localhost:8050/api/Claims');
  }

  public addClaim(claim: Claim): Observable<Object> {
    return this.http.post<Claim>(`http://localhost:8050/api/Claims`, claim);
  }

  public deleteClaim(idClaim: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8050/api/Claims/remove-claim/${idClaim}`);
  }

  public getClaim(idClaim: number): Observable<Claim> {
    return this.http.get<Claim>(`http://localhost:8050/api/Claims/retrieve-claim/${idClaim}`);}
}
