import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class Post {

  server: string = "https://reqres.in/";

  constructor(private http: HttpClient) {

  }

  postData(body: any, api: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    let url = this.server + api;
    return this.http.post(url, JSON.stringify(body), httpOptions).pipe(map((res:any) => res));
  }

  getData( api: string){
    let url = this.server + api;
    return this.http.get(url).pipe(map((res:any) => res));
  }
}