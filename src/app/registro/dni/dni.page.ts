import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.page.html',
  styleUrls: ['./dni.page.scss'],
})
export class DniPage implements OnInit {

  @Output() slideMovement = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  slideMove(direction: string) {
    this.slideMovement.emit(direction);
  }

}
