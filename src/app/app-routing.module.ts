import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EmailSubmitComponent } from './components/contact/email-submit/email-submit.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', 
        component: HomeComponent
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then((module) => module.BlogModule)
      },
      {
        path: 'resume',
        component: ResumeComponent
      },
      {path: 'success', component: EmailSubmitComponent},
      {path: '', redirectTo: '', pathMatch: 'full'},
      {path: '**', component: HomeComponent}
    ], {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
