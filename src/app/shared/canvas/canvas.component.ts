import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  constructor(private router: Router) { }
//   logo = 'assets/img/logo-dark.png';
//   instapost = [
//     {img:'assets/img/ig/1.jpg'},
//     {img:'assets/img/ig/2.jpg'},
//     {img:'assets/img/ig/3.jpg'},
//     {img:'assets/img/ig/4.jpg'},
//     {img:'assets/img/ig/5.jpg'},
//     {img:'assets/img/ig/6.jpg'},
//   ];

  ngOnInit(): void {
  }

  navigate(link: any) {
    this.router.navigate([`${link}`]).then(() => {
      $('.sigma_aside').removeClass('open');
      $('#menu-toggle').toggleClass('open');
      window.location.reload();
    });
  }

}
