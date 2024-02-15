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
  addOffer(offer:Offer):Observable<Offer[]>{
    return this.http.post<Offer[]>(this.offerUrl+'/add',offer)
  }
  getOfferById(id:number):Observable<Offer[]>{
    return this.http.get<Offer[]>(+this.offerUrl+'/offer/'+id)
  }
  deleteappartment(id : number):Observable<Offer[]>{
    return this.http.delete<Offer[]>(this.offerUrl+'/'+id)
  }

  upadateappartment(id:number,appartement:Offer):Observable<Offer[]>
{
  return this.http.put<Offer[]>(this.offerUrl+'/'+id,appartement)
}}