import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderModule } from './shared/loader/loader.module';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { CanvasComponent } from './shared/canvas/canvas.component';
import { BirthdayComponent } from './components/birthday/birthday.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BirthdayComponent,
    ResumeComponent,
    MenuComponent,
    CanvasComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    LoaderModule,
    ComponentsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
