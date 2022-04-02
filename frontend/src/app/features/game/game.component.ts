import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/services/websocket.service';
import { Client } from 'stompjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  gameMasterWebSocket!: Client;

  constructor(private webSocketService: WebSocketService) {
    this.gameMasterWebSocket = webSocketService.getGameMaster();
   }

  ngOnInit(): void {
    let _this = this;
    this.gameMasterWebSocket.connect({}, function(frame) {
      _this.gameMasterWebSocket.subscribe('/topic/greetings', function(message) {
        console.log(message.body);
      });
    });
  }

  debug() {
    this.gameMasterWebSocket.send('/app/hello', {}, "TEST");
  }
}
