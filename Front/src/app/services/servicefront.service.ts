import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../models/Supplier';
import { Booth } from '../../../projects/back-office/src/app/models/Booth';
@Injectable({
  providedIn: 'root'
})
export class ServicefrontService {

  SupplierUrl ='http://localhost:8763'

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

  removeSupplierFromSupplyRequest(supplierid:number): Observable<string>
  {
    return this.http.post<string>(`${this.SupplierUrl}/RefuseSupplierRequest/${supplierid}`, {});
  }
  checkifReserved(booth:string):Observable<Boolean>{
    return this.http.get<Boolean>(`${this.SupplierUrl}/checkReserved/${booth}`)
  }
  affectBoothToExhibitor(boothname:string,exhibitorid:number): Observable<Booth>{
    return this.http.get<Booth>(`${this.SupplierUrl}/affectBoothToexhibitor/${boothname}/${exhibitorid}`)
  }

  findExhibitorIdByBooth(boothName:string): Observable<number>{
    return this.http.get<number>(`${this.SupplierUrl}/findExhibitorByBooth/${boothName}`)
  }
  
}
