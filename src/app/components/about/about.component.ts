import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    about: string;

  constructor() { 
    this.about = 'I am Lilia Suau, web developer from Michigan, United States. I have rich experience in web site design '
    + 'and building and customization - also, I am good at WordPress.';
  }

  ngOnInit() {
  }

  downloadResume() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/images/lilia-suau_resume.pdf');
    link.setAttribute('download', `lilia-suau_resume.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
