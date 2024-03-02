import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../models/Supplier';
@Injectable({
  providedIn: 'root'
})
export class ServicefrontService {

  SupplierUrl ='http://localhost:8763/BoothAndSupplier/api/Supplier'

  constructor(private http:HttpClient) { }
  getsupplier():Observable<Supplier[]>{
    return this.http.get<Supplier[]>(this.SupplierUrl)
  }
  addsupplier(supplier:Supplier):Observable<Supplier[]>{
    return this.http.post<Supplier[]>(this.SupplierUrl+'/addsupplierrequest',supplier)
  }
  deletesupplier(id : number):Observable<Supplier[]>{
    return this.http.delete<Supplier[]>(this.SupplierUrl+'/deletesupplierrequest/'+id)
  }
  
  upadatesupplier(id:number,supplier:Supplier):Observable<Supplier[]>
  {
  return this.http.put<Supplier[]>(this.SupplierUrl+'/modifysupplierrequest/'+id,supplier)
  }
  affectsupplierTorequest(idsupplier: number, idrequest: number): Observable<string> {
    return this.http.post<string>(`${this.SupplierUrl}/affectrequesttosupplier/${idsupplier}/${idrequest}`, {});
  }
  
}
