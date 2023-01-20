import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public currentSection;

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(section) {
    this.currentSection = section;
    const sectionHtml = document.querySelector('#' + section);
    if (sectionHtml !== null) {
      sectionHtml.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      $('#return-to-top').addClass('hide');
    }
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

}
