import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dni-frente',
  templateUrl: './dni-frente.page.html',
  styleUrls: ['./dni-frente.page.scss'],
})
export class DniFrentePage implements OnInit {

  @Output() slideMovement = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  slideMove(direction) {
    this.slideMovement.emit(direction);
  }

}
