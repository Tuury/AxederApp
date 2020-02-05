import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-foto-perfil',
  templateUrl: './foto-perfil.page.html',
  styleUrls: ['./foto-perfil.page.scss'],
})
export class FotoPerfilPage implements OnInit {

  @Output() slideMovement = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  slideMove(direction: string) {
    this.slideMovement.emit(direction);
  }
}
