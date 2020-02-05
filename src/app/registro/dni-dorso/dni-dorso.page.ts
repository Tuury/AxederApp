import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dni-dorso',
  templateUrl: './dni-dorso.page.html',
  styleUrls: ['./dni-dorso.page.scss'],
})
export class DniDorsoPage implements OnInit {

  @Output() slideMovement = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  slideMove(direction) {
    this.slideMovement.emit(direction);
  }
}
