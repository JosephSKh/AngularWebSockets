import { Component } from '@angular/core';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularWebSockets';
  myMessage: string = '';
  messages: string[] = ['message 1', 'message 2', 'message 3'];
  socket: any;

  constructor() {
    this.socket = io("ws://localhost:3000");
    this.socket.on("message", (message: any) => {
      this.messages.push(message);
    });
  }

  send(message: string) {
    this.socket.emit('message', message);
  }
}
