import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.page.html',
  styleUrls: ['./phone.page.scss'],
})
export class PhonePage implements OnInit {

  @Output() slideMovement = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  slideMove(direction) {
    this.slideMovement.emit(direction);
  }

}
