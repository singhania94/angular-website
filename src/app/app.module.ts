import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UniversalRouterModule } from './universal-routing.module';

import { AppComponent } from './app.component';
import { UniversalMenuComponent } from './universal-menu/universal-menu.component';
import { UniversalFooterComponent } from './universal-footer/universal-footer.component';
import { UniversalContentComponent } from './universal-content/universal-content.component';
import { HomeComponent } from './universal-content/home/home.component';
import { ResumeComponent } from './universal-content/resume/resume.component';
import { ContactComponent } from './universal-content/contact/contact.component';
import { ContentWritingComponent } from './universal-content/content-writing/content-writing.component';
import { TechBlogsComponent } from './universal-content/tech-blogs/tech-blogs.component';
import { VideosComponent } from './universal-content/videos/videos.component';
import { IntroductionComponent } from './universal-content/home/introduction/introduction.component';
import { BriefComponent } from './universal-content/home/brief/brief.component';
import { ContactMeComponent } from './universal-content/home/contact-me/contact-me.component';
import { CodeComponent } from './universal-content/home/code/code.component';
import { TeachComponent } from './universal-content/home/teach/teach.component';
import { TravelComponent } from './universal-content/home/travel/travel.component';
import { ResumeIntroductionComponent } from './universal-content/resume/resume-introduction/resume-introduction.component';
import { ResumeDetailComponent } from './universal-content/resume/resume-detail/resume-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversalMenuComponent,
    UniversalFooterComponent,
    UniversalContentComponent,
    HomeComponent,
    ResumeComponent,
    ContactComponent,
    ContentWritingComponent,
    TechBlogsComponent,
    VideosComponent,
    IntroductionComponent,
    BriefComponent,
    ContactMeComponent,
    CodeComponent,
    TeachComponent,
    TravelComponent,
    ResumeIntroductionComponent,
    ResumeDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UniversalRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
