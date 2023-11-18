class Client {
  _clientId;
  _mediator;
  constructor(clientId) {
    this._clientId = clientId;
  }

  getClientId() {
    return this._clientId;
  }

  setMediator(mediator) {
    this._mediator = mediator;
    console.log("Attached to Mediator ", mediator.getMediatorId());
  }

  send(message, toClient = null) {
    this._mediator.send(message, this, toClient);
  }

  recieve(message, from) {
    console.log(`${from.getClientId()} -> ${this._clientId} : ${message}`);
  }
}

module.exports = Client;
