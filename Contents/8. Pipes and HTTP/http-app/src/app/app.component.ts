import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;

  constructor(private http: HttpClient,
              private postsSrv: PostsService) {}

  ngOnInit(): void {
    this.onFetchPosts();
  }

  onCreatePost(postData: Post): void {
    // Send Http request
    this.postsSrv.createAndStorePosts(postData.title, postData.content).subscribe(responseData => {
      this.onFetchPosts();
    });
  }

  onFetchPosts(): void {
    this.isFetching = true;
    this.postsSrv.fetchPosts().subscribe(
      posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      }, error => {
        this.error = error.message;
      });
  }

  onClearPosts(): void {
    // Send Http request
    this.postsSrv.deleteAllPosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }
}
