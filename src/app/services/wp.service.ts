import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Post } from '../models/Post';


@Injectable()
export class WpService {
  private postsUrl = 'https://www.fintechlodge.com/wp-json/wp/v2/posts';
  private posts;

  constructor(private _http: Http) { }

  getPosts():Observable<Post[]> {
    return this._http.get(this.postsUrl).map(res=>res.json());
  }

}
