import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
    data: any;

  constructor() { 
    this.data = [
        {
            work: 'Great Lakes Hearing Care',
            src: 'assets/images/hand_blob.png',
            link: 'https://www.greatlakesaud.com',
            description: 'I designed and developed a website for a new audiology buisiness. My goal was to make it stand out from '
          + 'other audiology companies while maintaining its usability and cleanliness.',
            more: '',
            button: 'Visit Website',
            reverse: true
        }
      //   {
      //     work: 'Web Performance: The Problems',
      //     src: 'assets/images/desk_blob.png',
      //     link: '/blog/1',
      //     description: 'No doubt, there are a ton of reasons why websites are slow, some of which are case-specific. '
      //     + 'I like to look at these factors from two perspectives...',
      //     more: '',
      //     button: 'View Post',
      //     reverse: false
      // },
      // {
      //   work: 'Angular DataTables (How to make the most out of them)',
      //   src: 'assets/images/desk_blob.png',
      //   link: '/blog/2',
      //   description: 'Using JQuery with Angular can be a positive or a negative depending on what you\'re using it for. '
      //   + 'Let\'s take a look at some of the most common problems that can occur. ',
      //   more: '',
      //   button: 'View Post',
      //   reverse: true
      // }
    ]
  }

  ngOnInit() {
  }

  goToLink(url: string){
    window.open(url, "_blank");
}
}
