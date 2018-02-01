import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';
import { Message } from '../message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[] = [];

  constructor(public messageService: MessageService) { }

  public closeMessage(message: Message) {
    const index: number = this.messages.indexOf(message);
    this.messages.splice(index, 1);
  }

  ngOnInit() {
    this.getMessages();
  }

  getMessages(): void {
    this.messages = this.messageService.getMessages();
  }

}
