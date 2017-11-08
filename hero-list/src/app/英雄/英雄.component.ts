import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { 模拟英雄 } from '../模拟英雄榜';

@Component({
  selector: 'app-heroes',
  templateUrl: './英雄.component.html',
  styleUrls: ['./英雄.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class 英雄Component implements OnInit {
  
  heroes = 模拟英雄;

  constructor() { }

  ngOnInit() {
  }

}
