import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { status, Supplier } from '../models/Supplier';
import { User } from '../models/User';
import { SupplyRequest } from '../models/SupplyRequest';
import { map } from 'rxjs';
import { Booth } from '../models/Booth';
import { BoothRepresentation } from '../models/BoothRepresentation';
@Injectable({
  providedIn: 'root'
})
export class ServicebackService {

  SupplierUrl ='http://localhost:8763/BoothAndSupplier/api/Supplier'

  BoothUrl ='http://localhost:8763/BoothAndSupplier/api/BoothAndSupplier'

  userUrl ='http://localhost:8763/BoothAndSupplier/api/Users'

  sequenceUrl ='http://localhost:8763/BoothAndSupplier/api/sequence'
  
  
  constructor(private http:HttpClient) { }
/* 
  getSommeValueOf(list:any[], critiria:string, value:any){
let n=0
for(let i in list){
  if(list[i][critiria]==value){
    n++
  }
}
return n
  } */

  getsupplier():Observable<Supplier[]>{
    return this.http.get<Supplier[]>(this.SupplierUrl)
  }
  getsupplierItemById(id:number):Observable<SupplyRequest>{
    return this.http.get<SupplyRequest>(this.SupplierUrl+'/SupplierRequestStatus/'+id)
  }
  addsupplier(supplier:SupplyRequest):Observable<SupplyRequest[]>{
    return this.http.post<Supplier[]>(this.SupplierUrl+'/addsupplierrequest',supplier)
  }
  deletesupplier(id : number):Observable<Supplier[]>{
    return this.http.delete<Supplier[]>(this.SupplierUrl+'/deletesupplierrequest/'+id)
  }

  upadatesupplier(id:number,supplier:Supplier):Observable<Supplier[]>
{
  return this.http.put<Supplier[]>(this.SupplierUrl+'/modifysupplierrequest/'+id,supplier)
}

getSupplierById(id: number): Observable<User[]> {

  return this.http.get<User[]>(`${this.SupplierUrl}/Supplierbyid/${id}`);
  
}
setRequestStatus(requestid: number,status:String): Observable<Supplier[]> {
  

  return this.http.post<Supplier[]>(`${this.SupplierUrl}/changeStatus/${requestid}/${status}`,{});
  
}
CheckStatusSupplyRequest(requestid: number): Observable<Supplier> {
  

  return this.http.get<Supplier>(`${this.SupplierUrl}/SupplierRequestStatus/${requestid}`);
  
}
////////////////////////////////////////////////////////////////BOOOOOOOOOOOOOOOOOOTHHHHHHHH/////////////////////////////////////////////////////////////////
AddBooth(booth:Booth):Observable<Booth[]>{
  return this.http.post<Booth[]>(this.BoothUrl+'/addBooth',booth)
}
  

getBooths():Observable<Booth[]>{
  return this.http.get<Booth[]>(this.BoothUrl+'/showallBooths')
}
getBoothRepresentation():Observable<BoothRepresentation[]>{
  return this.http.get<BoothRepresentation[]>(this.BoothUrl+'/showallBooths')
}

getAllUserSuppliers():Observable<User[]>{
  return this.http.get<User[]>(this.userUrl)
}

deleteBooth(booth : Booth):Observable<Booth[]>{
  return this.http.delete<Booth[]>(this.BoothUrl+'/deletebooth/'+booth.id)
}

affectSupplierTobooth(boothName : string,idSupplier:number):Observable<Booth[]>{
  return this.http.put<Booth[]>(this.BoothUrl+'/affectBoothToSupplier/'+boothName+'/'+idSupplier,{})
}

/////////////////////////Handling Booth sequences /////////////////////////////////
getBoothSequence(boothName: string):Observable<number>{
  return this.http.get<number>(this.sequenceUrl+'/getSequence/'+boothName)
}
incrementBoothSequence(boothName: string):Observable<number>{
  return this.http.post<number>(this.sequenceUrl+'/IncrementBoothSequence/'+boothName,{})
}
}
