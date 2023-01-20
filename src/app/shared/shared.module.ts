import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NguCarouselModule } from '@ngu/carousel';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgImageSliderModule } from 'ng-image-slider';
import { LightboxModule } from 'ngx-lightbox';
import { CarouselModule } from 'ngx-owl-carousel-o';

const materialModules = [
  MatCheckboxModule,
  MatInputModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    LightboxModule, 
    NgImageSliderModule, 
    CarouselModule, 
    IvyCarouselModule, 
    NguCarouselModule, 
    NgbModule,
    ...materialModules
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LightboxModule, 
    NgImageSliderModule, 
    CarouselModule, 
    IvyCarouselModule, 
    NguCarouselModule, 
    NgbModule,
    ...materialModules
  ],
  providers: []
})
export class SharedModule {}
