import { Injectable } from '@angular/core';
import { Message, MessageType } from './message';

@Injectable()
export class MessageService {

  messageTypes: { [id: string]: MessageType; } = {
    'silent': { type: 'silent', timeout: null },
    'success': { type: 'success', timeout: 3000 },
    'error': { type: 'danger', timeout: 20000 }
  };

  messages: Message[] = [];

  add(messageText: string, messageType: MessageType) {
    if(messageType.type == 'silent')
    {
      return;
    }
    const message: Message = {
      id: this.messages.length,
      text: messageText,
      type: messageType.type
    };
    this.messages.push(message);
    if(messageType.timeout)
    {
      setTimeout(() => this.delete(message), messageType.timeout);
    }
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
