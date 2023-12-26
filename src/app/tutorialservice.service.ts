import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TutorialserviceService {
urlBase:String="http://localhost:8080/";
  constructor(private http: HttpClient) { 

  }
   getHeaderList():any {
    return this.http.get("http://localhost:8080/getallheaders");
  } 
  getsideHeaderList(id:number):any {
  //   const options = {
	// params:new HttpParams().append("id",id)
	//  }
  return this.http.get("http://localhost:8080/getallsideheaders/{id}?id=1");
    
  
  // return this.http.get(this.urlBase+"getallsideheaders",options);
  } 


  getListofSubjectHeader(){
    return "Alok";
  }
}
