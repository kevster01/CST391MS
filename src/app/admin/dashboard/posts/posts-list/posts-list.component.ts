import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import {Post } from '../posts.model';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy{

  posts: Post[] =[];
  private postsSub: Subscription;

  constructor(public postService: PostsService) { }
  ngOnInit(){
      this.postService.getPost();
      this.postsSub = this.postService.getUpdateListener().subscribe((posts: Post[])=>{
        this.posts=posts;
      })
  }

  ngOnDestroy(): void {
     this.postsSub.unsubscribe(); 
  }

}
