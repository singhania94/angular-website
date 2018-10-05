import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './universal-content/home/home.component';
import { ResumeComponent } from './universal-content/resume/resume.component';
import { TechBlogsComponent } from './universal-content/tech-blogs/tech-blogs.component';
import { VideosComponent } from './universal-content/videos/videos.component';
import { ContentWritingComponent } from './universal-content/content-writing/content-writing.component';
import { ContactComponent } from './universal-content/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'techblogs', component: TechBlogsComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'contentwriting', component: ContentWritingComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class UniversalRouterModule { }
