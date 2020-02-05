import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  @ViewChild('sliderRef', { static: true }) protected slides: IonSlides;

  constructor() { }

  ngOnInit() {
  }

  moveSlides(direction) {
    if (direction === 'next') {
      this.slides.slideNext();
    } else {
      this.slides.slidePrev();
    }
  }


}
