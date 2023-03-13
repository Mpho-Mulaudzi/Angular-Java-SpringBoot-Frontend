import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloworldService {

  constructor(private httpClient: HttpClient){}

 private baseUrl ="http://localhost:8080/api/v1/Hello";


 public getHelloWorld(){
  return this.httpClient.get(`${this.baseUrl}`,{responseType: 'text'});
 }
}
