import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client, over } from 'stompjs';
import SockJS from 'sockjs-client';
import { ArmorsAndIdentities } from '../core/api/v1';

@Injectable({
  providedIn: 'root'
})

export class WebSocketService {

  private gameMasterWebSocket = over(new SockJS(environment.websocket+'/'));

  constructor() {}

  getWebSocket() {
    return over(new SockJS(environment.websocket+'/'));
  }

  sendGameMaster(data: any, path: string, id: string) {
    this.gameMasterWebSocket.send('/gamemaster' + path + '/' + id, {}, JSON.stringify(data));
  }

  getGameMaster(): Client {
    return this.gameMasterWebSocket;
  }

  addEquipement(armorsAndIdentities: ArmorsAndIdentities, id: string) {
    this.gameMasterWebSocket.send('/gamemaster/addEquipement/'+id, {}, JSON.stringify(armorsAndIdentities));
  }
}
