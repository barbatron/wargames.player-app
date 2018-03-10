let ws;

class WsConnection {
  constructor({url = 'ws://::8080', eventHandlers}) {
    this.ws = new WebSocket(url);
    this.ws.onopen = eventHandlers.open;
    this.ws.onmessage = eventHandlers.message;
    this.ws.onclose = eventHandlers.close;
    this.ws.onerror = eventHandlers.error;
  }

  sendMessage(type, payload) {
    if (this.ws.readyState !== WebSocket.OPEN) {
      throw new Error(`Unable to send message: socket not open`);
    }
    const msg = JSON.stringify({type: type, payload: payload});
    this.ws.send(msg);
  }
}

export {WsConnection};
