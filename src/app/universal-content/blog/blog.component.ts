import { Component, OnInit } from '@angular/core';

import { PostService } from '../../post.service';
import { Post } from '../../post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private service: PostService) { }

  ngOnInit() {
    this.getBlogs();
  }

  techBlogs: Post[];
  otherBlogs: Post[];

  getBlogs(): void {
    this.service.getStaticTechBlogPosts().subscribe(posts => this.techBlogs = posts);
    this.service.getStaticContentWritingPosts().subscribe(posts => this.otherBlogs = posts);
  }
}
