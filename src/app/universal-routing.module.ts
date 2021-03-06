import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './universal-content/home/home.component';
import { ResumeComponent } from './universal-content/resume/resume.component';
import { BlogComponent } from './universal-content/blog/blog.component';
import { AboutComponent } from './universal-content/about/about.component';
import { ContactComponent } from './universal-content/contact/contact.component';
import { BlogDetailComponent } from './universal-content/blog-detail/blog-detail.component';
import { UniversalNotFoundComponent } from './universal-not-found/universal-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: UniversalNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)//, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [
    RouterModule
  ]
})

export class UniversalRouterModule { }
