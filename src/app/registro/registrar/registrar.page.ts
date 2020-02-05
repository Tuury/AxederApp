import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  @Output() slideMovement = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  slideMove(direction) {
    this.slideMovement.emit(direction);
  }
}
