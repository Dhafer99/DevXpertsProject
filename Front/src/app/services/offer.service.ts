import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer, typeOffer } from '../models/offer';

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

  getOffersByTypeOffer(typeOffer: string, id:number):Observable<Offer[]>
  {
    return this.http.get<Offer[]>(this.offerUrl+'/OffersByTypeOffer/'+id+'/'+typeOffer);
  }
  convertToPdf(id:number): Observable<ArrayBuffer> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });
    return this.http.get('/api/convertToPdf/'+id, { headers: headers, responseType: 'arraybuffer' });
  }

}