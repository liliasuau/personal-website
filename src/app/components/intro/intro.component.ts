import { trigger, transition, useAnimation } from '@angular/animations';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { bounceIn, bounceInLeft, slideInLeft } from 'ng-animate';

declare let require: any;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [
    trigger('bounce', [
      transition(
        '* => *',
        useAnimation(bounceIn, {
          // Set the duration to 5seconds and delay to 2seconds
          params: {
            timing: 3,
            delay: 0,
            a: '3000px',
            b: '-25px',
            c: '10px',
            d: '-5px'
          }
        })
      )
    ]),
    trigger('slide', [
      transition(
        '* => *',
        useAnimation(bounceInLeft, {
          params: { timing: 3, delay: 0 }
        })
      )
    ])
  ]
})
export class IntroComponent implements OnInit, AfterContentInit {
  public bounce: number = 1;

  constructor() {
    setInterval(() => {
      this.bounce = this.bounce < 3 ? this.bounce + 1 : 1;
    }, 3000);
  }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    setTimeout(() => {
      const Parallax = require('parallax-js');
      const scene = document.getElementById('scene');
      const parallaxInstance1 = new Parallax(scene, {
        relativeInput: false
      });
    }, 2000);
  }

  scrollTo(section) {
    const sectionHtml = document.querySelector('#' + section);
    if (sectionHtml !== null) {
      sectionHtml.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

}
