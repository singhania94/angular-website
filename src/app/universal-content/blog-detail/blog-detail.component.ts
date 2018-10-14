import { Component, OnInit } from '@angular/core';
import { Post } from '../../post';
import { PostService } from '../../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: PostService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getTechBlogById('/blog/' + params.id);
    });
  }

  techBlog: Post;

  getTechBlogById(id: string): void {
    this.service.getStaticTechBlogPostById(id).subscribe(post => this.techBlog = post);
  }

}
