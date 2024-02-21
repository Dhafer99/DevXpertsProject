import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  offerUrl ='http://localhost:8899/api/Offer';

  constructor(private http:HttpClient) { }

  getAllOffers():Observable<Offer[]>{
    return this.http.get<Offer[]>(this.offerUrl+'/allOffers')
  }
  getAllOffersByExibitor(id : number):Observable<Offer[]>{
    return this.http.get<Offer[]>(this.offerUrl+'/offerExibitor/'+id)
  }
  addOffer(formData:FormData): Observable<any> {
    return this.http.post<any>(this.offerUrl+'/add',formData)
  }
  deleteOffer(id : number):Observable<Offer>{
    return this.http.delete<Offer>(this.offerUrl+'/'+id)
  }

  updateOffer(formData:FormData):Observable<Offer[]>
  {
    return this.http.put<Offer[]>(this.offerUrl+'/update',formData)
  }

  getOfferById(id:number):Observable<Offer>
  {
    return this.http.get<Offer>(this.offerUrl+'/offer/'+id);
  }

}