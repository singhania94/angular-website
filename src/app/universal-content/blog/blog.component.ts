import { Component, OnInit } from '@angular/core';

import { PostService } from '../../post.service';
import { Post } from '../../post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  private fragment: string;

  constructor(private route: ActivatedRoute, private service: PostService) { }

  techBlogs: Post[];
  otherBlogs: Post[];

  getBlogs(): void {
    this.service.getStaticTechBlogPosts().subscribe((posts: Post[]) => this.techBlogs = posts);
    //this.techBlogs.forEach(techBlog => techBlog.imgUrl = '../../../assets/img/blogs/' + techBlog.imgUrl + '_bw-reduced.jpg');
    this.service.getStaticContentWritingPosts().subscribe((posts: Post[]) => this.otherBlogs = posts);
  }

  ngOnInit() {
    this.getBlogs();
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      if(!this.fragment)
        document.querySelector('#intro')
          .scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    } catch (e) { }
  }
}
