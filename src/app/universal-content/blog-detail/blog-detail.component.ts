import { Component, OnInit } from '@angular/core';
import { Post } from '../../post';
import { PostService } from '../../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  techBlog: Post;
  story: string;

  constructor(private router: Router, private route: ActivatedRoute, private service: PostService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getTechBlogById('/blog/' + params.id);
    });
  }

  getTechBlogById(id: string): void {
    this.service.getStaticTechBlogPostById(id).subscribe((post: Post) => this.techBlog = post);
    if (!this.techBlog) {
      this.router.navigate(['/not_found']);
    }
    this.service.getStaticTechBlogPostStoryById(this.techBlog.story)
      .subscribe((data: any) => {
        this.story = data.story;
      }
    );
}

}
