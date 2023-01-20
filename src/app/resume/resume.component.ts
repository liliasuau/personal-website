import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

    intro: string;
    technologies: string[];
    tools: string[];
    experience: any;
    coursework: string[];
    projects: any;
  constructor() { 
    this.intro = 'Analytical software developer skilled in leadership, with a strong foundation in mathematics and critical thinking. Extensive experience in full-stack application development, UI/UX design, and performance optimization.';
    this.technologies = ['TypeScript', 'Angular', 'JavaScript', 'Sass', 'C#', 'ASP.NET', 'MySQL', 'ElasticSearch', 'NodeJS'];
    this.tools = ['Jenkins', 'Google Cloud', 'OAuth 2', 'Mulesoft', 'Wordpress', 'Responsive Web Design', 'Performance Optimization', 'UX Design'];
    this.experience = [
        {
            company: 'TelNet Worldwide',
            position: 'Developer I',
            dates: 'August 2021 - Present',
            about: [ 'Lead development of company\'s internal customer portal and reporting tool using Angular, ASP.NET, and ElasticSearch',
                'Promptly implement and improve features such as sitewide audit logging, salesforce tickets integration, billing management, and notification systems',
                'Created self registration service for new internal customer portal that links previous account data and salesforce accounts',
                'Reduced loading times by 85% from restructuring stored procedures and preloading components/APIs',
                'Provided prompt solutions and proactive troubleshooting to resolve complex issues'
            ]
        },
        {
            company: 'Bosch',
            position: 'Software Developer Co-op',
            dates: 'June 2018 - 2019',
            about: [ 'Designed and developed a dashboard for an internal application using ASP.NET Core MVC and Power BI',
                'Resolved issues on the support team, fulfilled client requests, and added enhancements to improve user experience',
                'Created hangfire jobs with MySQL server to perform background jobs'
            ]
        },
        {
            company: 'IGVC',
            position: 'Programmer',
            dates: 'September 2016 - 2018',
            about: [ 'Created simulations for testing software components and robot behavior in different environments using Gazebo and ROS',
                'Collaborated with engineers to build an autonomous robot capable of completing advanced courses'
            ]
        }
    ]
    this.projects = [
        {
            name: 'Identity Management (Senior Capstone)',
            description: [ 'Led and developed an Android application that implements OAuth 2.0 functionality with facial and voice recognition',
            'Implemented NodeJS endpoints to provide data to the application via RESTful APIs w/JSON',
            'Held bi-weekly meetings, assigned tasks, and met with individual members to assist on tasks'
            ]
        },
        {
            name: 'Great Lakes Hearing Care',
            description: [ 'Designed and built a website for an Audiology Company with a solid, consistent design system',
            'Implemented with Bootstrap, Angular Material, and SmtpJS for contact forms - also created a custom HTML email template that gets sent to provider on form submit',
            'Hosted with Google Cloud Storage and secured with CloudFlare'
            ],
            link: 'https://www.greatlakesaud.com'
        }
    ]
    this.coursework = ['Information Security Practise', 'Number Theory w/Cryptography', 'Algorithms', 'Database Design', 'Computer Organization', 'Game Design', 'Linear Algebra']
  }

  ngOnInit() {
  }
}
