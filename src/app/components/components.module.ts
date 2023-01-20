import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { IntroComponent } from './intro/intro.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorksComponent } from './works/works.component';
import { MovingContentComponent } from './moving-content/moving-content.component';

@NgModule({
  declarations: [
    IntroComponent,
    AboutComponent,
    ExperienceComponent,
    WorksComponent,
    MovingContentComponent,
    ContactComponent
  ],
  exports: [
    IntroComponent,
    AboutComponent,
    ExperienceComponent,
    WorksComponent,
    MovingContentComponent,
    ContactComponent
  ],
  imports: [CommonModule, SharedModule]
})
export class ComponentsModule {}
