import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, keyframes, group, query, style, animate, animateChild, stagger } from '@angular/animations';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  animations: [
    trigger("myAnimationTrigger", [
      transition('void => *', [
        style(
          {
            right: '-33%',
            bottom: '-66%'
          }),
      animate(1000, style(
        {
          right: '0',
          bottom: '0'
        }
      )),
      ])

      // state('start', style({
      //   right: '-33%',
      //   bottom: '-66%'
      // })),
      // state('stop', style({
      //   right: '0',
      //   bottom: '0'
      // })),
      // transition('start => stop', [
      //   animate('2s')
      // ]),


      // transition('* => start', [
      // animate(1000, style(
      //   {
      //     right: '0',
      //     bottom: '0'
      //   }
      // )),
      // ]),
      // state('start', style({
      //   right: '0',
      //   bottom: '0'
      // })),
      // state('stop', style({
      //   right: '0',
      //   bottom: '0'
      // }))



    ])
  ]
})
export class StartPageComponent implements OnInit {

  public rocketAnimationStatus = 'start';
  constructor() { }

  ngOnInit(): void {
  }

  changeRocketStatus(): void {
    this.rocketAnimationStatus = (this.rocketAnimationStatus = 'start') ? 'stop' : 'start';
  }

}
