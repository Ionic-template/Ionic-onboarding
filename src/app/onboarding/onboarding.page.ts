import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  constructor() { }

  slideOpts = {
    initialSlide: 0,
    speed: 400,

  };

  appInto = [
    {
      title: 'Welcome to Soundsfluent',
      text: 'Close the English fluency gap by the 10% that stand between you just functioning and thriving.',
      img: 'onboard-1.svg'
    },
    {
      title: 'Welcome to Soundsfluent',
      text: 'Close the English fluency gap by the 10% that stand between you just functioning and thriving.',
      img: 'onboard-1.svg'
    },
    {
      title: 'Welcome to Soundsfluent',
      text: 'Close the English fluency gap by the 10% that stand between you just functioning and thriving.',
      img: 'onboard-1.svg'
    },
  ]

  ngOnInit() {
  }

}
