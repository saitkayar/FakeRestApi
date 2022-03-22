import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
apiUrl="https://jsonplaceholder.typicode.com/posts"
  constructor(private httpClient:HttpClient) { }
  getAll(userId:number):Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.apiUrl+"?userId_like="+userId);
  }
}
