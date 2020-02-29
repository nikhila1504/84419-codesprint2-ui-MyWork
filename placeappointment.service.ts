import { Injectable } from '@angular/core';
import { Placeappointment } from '../modals/placeappointment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceappointmentService {
 
  baseUrl:string;


  constructor(private httpClient :HttpClient) {
    this.baseUrl="http://localhost:4444/app";
   }
   getAll() : Observable<Placeappointment[]>{
    return this.httpClient.get<Placeappointment[]>(this.baseUrl);
   }
   getById(id:number) : Observable<Placeappointment>{ 
    return this.httpClient.get<Placeappointment>(`${this.baseUrl}/${id}`);
   }
   add(app:Placeappointment) : Observable<Placeappointment>{
     return this.httpClient.post<Placeappointment>(this.baseUrl,app);
   }
  save(emp:Placeappointment) : Observable<Placeappointment>{
    return this.httpClient.put<Placeappointment>(this.baseUrl,emp);
  }
  deleteById(id:number) : Observable<void>{ 
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
   }
}
