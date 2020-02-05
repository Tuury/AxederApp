import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-sms-code',
    templateUrl: './sms-code.page.html',
    styleUrls: ['./sms-code.page.scss'],
})
export class SmsCodePage implements OnInit {

    @Output() slideMovement = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    slideMove(direction) {
        this.slideMovement.emit(direction);
    }
}
