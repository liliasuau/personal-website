import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public data: any;
  public introText: string;

  constructor() {
    this.introText = 'For over 3 years, I\'ve developed websites that are responsive, easy to use, and built with best practices. '
      + 'I try to create suited, simple and tested experiences to adapt the desires of companies to the needs of users.';
    this.data = [
      {
        position: 'Developer II at ',
        company: 'Brandt Information Services',
        link: 'https://www.brandtinfo.com',
        description: 'I currently assist in the development of an outdoor recreational management application. I develop key features such as controlled hunt draws, youth programs, and organization management.',
        more: '',
        stack: ['Angular', 'TypeScript', 'ASP.NET', 'Azure'],
        year: '2023'
      },
      {
        position: 'Developer I at ',
        company: 'TelNet Worldwide',
        link: 'https://www.telnetww.com',
        description: 'I lead the development of an internal customer portal and reporting tool. I also worked on optimizing performance by restructuring stored procedures and preloading components/APIs.',
        more: '',
        stack: ['Angular', 'TypeScript', 'ASP.NET', 'ElasticSearch', 'Jenkins', 'Wordpress'],
        year: '2021'
      },
      {
        position: 'Graduated at ',
        company: 'Oakland University',
        link: 'https://en.wikipedia.org/wiki/Oakland_University',
        description: 'I completed my Computer Science degree with a concentration in cyber security!',
        more: '',
        stack: [],
        year: '2020'
      },
      {
        position: 'Software Developer Co-op at ',
        company: 'Bosch',
        link: 'https://www.bosch.us',
        description: 'I assisted on the development of an internal application and designed personalized dashboards using Power BI.',
        more: '',
        stack: ['ASP.NET', 'Hangfire', 'JQuery'],
        year: '2018'
      }
    ]
  }

  public ngOnInit(): void {
  }

  public downloadResume(): void {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/images/lilia-suau_resume.pdf');
    link.setAttribute('download', `lilia-suau_resume.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
