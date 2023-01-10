import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit{
  constructor(public postService: PostsService){ }
  ngOnInit(): void {
      
  }
  onPostAdded(form: NgForm){
    if(form.invalid)
    {
      return 
    }
    this.postService.addPost(form.value.title, form.value.content, form.value.dateTime);
    form.resetForm()

  }

}
