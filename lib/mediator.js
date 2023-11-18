class Mediator {
  _mediatorId = null;
  _clientsMap = {};
  constructor(mediatorId) {
    this._mediatorId = mediatorId;
  }

  getMediatorId() {
    return this._mediatorId;
  }

  register(client) {
    this._clientsMap[client.getClientId()] = client;
    client.setMediator(this);
  }

  send(message, fromClient, toClient = null) {
    if (toClient) {
      // we send message to a client if toClient is provided else broadcast
      toClient.send(message, toClient);
    } else {
      // this is broadcasting code
      Object.entries(this._clientsMap).forEach(([clientId, client]) => {
        // console.log({ clientId, client });
        if (client !== fromClient) {
          client.recieve(message, fromClient);
        }
      });
    }
  }
}

module.exports = Mediator;
