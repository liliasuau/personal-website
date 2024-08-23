import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { fadeOutUp } from 'ng-animate';

declare var $: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public currentSection;
  scrolled: boolean = false;
  currImage: string = 'assets/images/lilias-logo-white.png';
  currUrl: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/resume') {
          this.currUrl = 1;
          // this.currImage = '/assets/images/lilias-logo.png';
          $('#menu-toggle').addClass('black');
          $('.navbar-brand').addClass('scroll');
        }
        else {
          this.currUrl = 0;
          this.currImage = 'assets/images/lilias-logo-white.png';
          $('#menu-toggle').removeClass('black');
          $('.navbar-brand').removeClass('scroll');
          $('#return-to-top').addClass('hide');
        }
      }

      if (!(val instanceof NavigationEnd)) { return; }
    });
  }

  ngOnInit() {
  }

  openCanvas() {
    $('.sigma_aside').toggleClass('open');
    $('#menu-toggle').toggleClass('open');
  }

  scrollTo(section) {
    this.currentSection = section;
    const sectionHtml = document.querySelector('#' + section);
    if (sectionHtml) {
      sectionHtml.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
    else {
      this.currentSection = 'home';
      this.router.navigate(['/']);
    }
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (this.currUrl == 0) {
      var intro = document.getElementById("intro");
      if (intro) {
        var experience = document.getElementById("experience");
        var moving = document.getElementById("moving-content");
        var contact = document.getElementById("contact");
        var windowScrollPosition = window.scrollY + 0;
        if (windowScrollPosition > intro!.offsetTop && windowScrollPosition < experience!.offsetTop || windowScrollPosition <= 0) {
          this.currImage = 'assets/images/lilias-logo-white.png';
          $('.navbar-brand').removeClass('scroll');
          $('#return-to-top').addClass('hide');
          if (windowScrollPosition > 100) {
            $('.navbar-brand').addClass('scroll');
          }
        }
        else if (windowScrollPosition > experience!.offsetTop && windowScrollPosition < moving!.offsetTop) {
          $('#menu-toggle').removeClass('black');
          $('#return-to-top').removeClass('hide');

        }
        else if (windowScrollPosition > moving!.offsetTop && windowScrollPosition < contact!.offsetTop) {
          $('#menu-toggle').addClass('black');
          $('#return-to-top').removeClass('hide');
        }
      }
    }
  }
}
