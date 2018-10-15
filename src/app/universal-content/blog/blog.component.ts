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
    this.service.getStaticTechBlogPosts().subscribe((posts: Post[]) => this.techBlogs = posts);
    //this.techBlogs.forEach(techBlog => techBlog.imgUrl = '../../../assets/img/blogs/' + techBlog.imgUrl + '_bw-reduced.jpg');
    this.service.getStaticContentWritingPosts().subscribe((posts: Post[]) => this.otherBlogs = posts);
  }
}
