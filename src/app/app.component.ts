import { Component } from '@angular/core';
import { WpService } from '../app/services/wp.service';
import { Post } from '../app/models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private posts:Post[];
  
  constructor(private _wp: WpService) { }

  ngOnInit() {
    this._wp.getPosts().subscribe(posts=>{
      this.posts = posts;
      console.log(posts);
    });
  }

  delete(i){
    this.posts.splice(i,1);
  }
}