import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppService {

constructor(private http: HttpClient) { }

getPosts(): Observable<IPost[]> {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  return this.http.get<IPost[]>(url);
}

}
