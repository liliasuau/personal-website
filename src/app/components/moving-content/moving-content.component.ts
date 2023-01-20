import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-moving-content',
  templateUrl: './moving-content.component.html',
  styleUrls: ['./moving-content.component.scss']
})
export class MovingContentComponent implements OnInit {
  constructor() { }
  right_1: number = 0;
  right_2: number = 0;
  left_1: number = 0;
  left_2: number = -200;

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    setTimeout(() => {  
        this.incrementItems();
        if (this.right_1 < -100) {
            this.right_1 = 0;
            this.right_2 = 0
        }
        if (this.left_1 > 100) {
            this.left_1 = 0;
            this.left_2 = -200;
        }
        this.setMovingItems();
        this.initialize();                 
      }, 0)
  }

  incrementItems() {
    this.right_1 = this.right_1 - 0.02;
    this.right_2 = this.right_2 - 0.02;
    this.left_1 = this.left_1 + 0.02;
    this.left_2 = this.left_2 + 0.02;
  }

  setMovingItems() {
    $("#transform-right__1").css({"transform":"translateX(" + this.right_1 + "%)"});
    $("#transform-right__2").css({"transform":"translateX(" + this.right_2 + "%)"});
    $("#transform-left__1").css({"transform":"translateX(" + this.left_1 + "%)"});
    $("#transform-left__2").css({"transform":"translateX(" + this.left_2 + "%)"});
  }

}
