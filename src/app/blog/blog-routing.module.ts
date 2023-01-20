import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogListComponent } from "./blog-list/blog-list.component";
import { BlogPostComponent } from "./blog-post/blog-post.component";
import { BlogComponent } from "./blog.component";

const routes: Routes = [
    {
        path: '',
        component: BlogComponent,
        children: [
            {
                path: '',
                component: BlogListComponent
            },
            {
                path: ':id',
                component: BlogPostComponent
            },
            { path: '**', redirectTo: '' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }