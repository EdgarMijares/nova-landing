import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  URL_SERVICE = "https://other-services-dos17.firebaseio.com";

  constructor(private http: HttpClient) { }

  getPost() {
    this.http.get(`${this.URL_SERVICE}/nova/blog.json`).subscribe( blog => {
      console.log(blog);
    });
  }
}
