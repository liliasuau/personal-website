import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { BlogListComponent } from "./blog-list/blog-list.component";
import { BlogPostComponent } from "./blog-post/blog-post.component";
import { BlogRoutingModule } from "./blog-routing.module";
import { BlogComponent } from "./blog.component";

@NgModule({
    declarations: [
        BlogComponent,
        BlogListComponent,
        BlogPostComponent
    ],
    imports: [
        BlogRoutingModule
        // SharedModule
    ]
})
export class BlogModule { }