import { Injectable } from '@angular/core';

import { MessageService } from './message.service';

@Injectable()
export class ChallengeService {

  constructor(private messageService: MessageService) { }

  sendMessage() {
    this.messageService.add('ble ble ble');
  }

}
