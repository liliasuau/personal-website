import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit() {
    let params = this.route.snapshot.params['id'];
    console.log(params);
  }
}
