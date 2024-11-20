import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ChatService, Message} from '../../../shared/services/chat.service';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {
  messages!: Observable<Message[]>;  // Observable to hold the messages
  formValue: string = '';  // Store the user's message

  constructor(private chatService: ChatService) {
  }

  ngOnInit(): void {
    // Subscribe to the conversation without re-accumulating old messages
    this.messages = this.chatService.conversation;
  }

  // Send a message and reset the input field
  sendMessage() {
    if (this.formValue.trim()) {
      this.chatService.converse(this.formValue).then(() => {
        this.formValue = '';  // Clear the input after message is sent
      }).catch(err => {
      });
    }
  }
}













