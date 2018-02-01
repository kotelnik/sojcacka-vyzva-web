import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable()
export class MessageService {

  messages: Message[] = [];

  add(messageText: string, messageType: string) {
    const message: Message = {
      id: 1,
      text: messageText,
      type: messageType
    };
    this.messages.push(message);
  }

  delete(message: Message) {
    const index: number = this.messages.indexOf(message);
    this.messages.splice(index, 1);
  }

  getMessages(): Message[] {
    return this.messages;
  }

  clear() {
    this.messages = [];
    }

}
