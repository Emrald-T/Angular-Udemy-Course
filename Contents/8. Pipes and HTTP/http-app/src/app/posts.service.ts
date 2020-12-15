import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    constructor(private http: HttpClient) {}

    createAndStorePosts(title: string, content: string): Observable<any> {
        const postData: Post = {title, content};
        return this.http
            .post<{name: string}>(
                'https://angular-http-app-26293.firebaseio.com/posts.json',
                postData
            );
    }

    fetchPosts(): Observable<Post[]> {
        return this.http
            .get<Post>('https://angular-http-app-26293.firebaseio.com/posts.json')
            .pipe(map(responseData => {
                const postsArray: Post[] = [];
                for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                    postsArray.push({...responseData[key], id: key});
                }
                }
                return postsArray;
            }));
    }

    deleteAllPosts(): Observable<any> {
        return this.http.delete('https://angular-http-app-26293.firebaseio.com/posts.json');
    }
}
