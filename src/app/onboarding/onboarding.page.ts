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

  navigate(slide, index) {
    slide.slideTo(index)
  }

  skip(){
    alert("Skipped!!!")
  }

  start(){
    alert("Start")
  }

  Slides = [
    {
      title: 'Start to invest for your future!',
      text: 'Ex totam praesentium incidunt aut.',
      img: 'step-1.svg'
    },
    {
      title: 'Follow our tips to achieve success!',
      text: 'Ex totam praesentium incidunt aut.',
      img: 'step-2.svg',
      imgBottom: true,
    },
    {
      title: 'Keep your investment safe',
      text: 'Ex totam praesentium incidunt aut.',
      img: 'step-3.svg'
    },
  ]

  ngOnInit() {
  }

}
